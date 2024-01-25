import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-gif',
  templateUrl: './card-gif.component.html',
  styleUrls: ['./card-gif.component.css'],
})
export class CardGifComponent implements OnInit {
  @Input()
  public gif!: Gif;

  constructor() {}

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property required');
  }
}
