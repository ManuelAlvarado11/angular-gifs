import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  @ViewChild('txtTagInput') taginput!: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  searchTag() {
    console.log(this.taginput.nativeElement.value);
  }
}
