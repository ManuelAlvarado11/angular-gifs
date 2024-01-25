import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  @ViewChild('txtTagInput')
  public taginput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  searchTag() {
    const newTag = this.taginput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.taginput.nativeElement.value = '';
  }
}
