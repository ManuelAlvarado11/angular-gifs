import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  // PROPS
  public gifsList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey: string = 'aLTSvEkZhdxxb1fgctTgf97eFH3QdD0A';
  private urlBase: string = 'https://api.giphy.com/v1/gifs';

  // CONSTRUCTOR
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  // GETTERS AND SETTERS
  get tagsHistory() {
    return [...this._tagsHistory];
  }

  // METODS
  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizateHistory(tag);
    this.getGifs(tag);
  }

  private organizateHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
    this.saveLocalStorage();
  }

  // ********************* LOCAL STORAGE ************************************

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    const temporal = localStorage.getItem('history');
    this._tagsHistory = JSON.parse(temporal!);
    this.searchTag(this._tagsHistory[0]);
  }

  // ************************ ENDPOINTS *****************************************

  // GET LIST GIFS
  public getGifs(search: string) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', search);

    this.http
      .get<SearchResponse>(`${this.urlBase}/search`, { params })
      .subscribe((resp) => {
        this.gifsList = resp.data;
      });
  }
}
