import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageCarouselComponent } from './homepage-carousel/homepage-carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InforcardComponent } from './inforcard/inforcard.component';
import { FooterComponent } from './footer/footer.component';
import { InfoWallOfTextComponent } from './info-wall-of-text/info-wall-of-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageCarouselComponent,
    NavBarComponent,
    InforcardComponent,
    FooterComponent,
    InfoWallOfTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
