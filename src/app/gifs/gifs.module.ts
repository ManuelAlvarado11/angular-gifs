import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardGifComponent } from './components/card-gif/card-gif.component';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardListComponent, CardGifComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
