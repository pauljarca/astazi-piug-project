import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageCarouselComponent } from './elements/homepage-carousel/homepage-carousel.component';
import { NavBarComponent } from './elements/nav-bar/nav-bar.component';
import { InforcardComponent } from './elements/inforcard/inforcard.component';
import { FooterComponent } from './elements/footer/footer.component';
import { InfoWallOfTextComponent } from './elements/info-wall-of-text/info-wall-of-text.component';
import { HeroComponent } from './elements/hero/hero.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FocusPageComponent } from './focus-page/focus-page.component';
import {RouterModule, Routes} from "@angular/router";
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { AdvicePageComponent } from './advice-page/advice-page.component';
import { ArticleComponent } from './articles/article/article.component';
import { TopBtnComponent } from './elements/top-btn/top-btn.component';
import { Article2Component } from './articles/article2/article2.component';
import { Article3Component } from './articles/article3/article3.component';
import { Article4Component } from './articles/article4/article4.component';
import { ContactPageComponent } from './contact-page/contact-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageCarouselComponent,
    NavBarComponent,
    InforcardComponent,
    FooterComponent,
    InfoWallOfTextComponent,
    HeroComponent,
    HomepageComponent,
    FocusPageComponent,
    ArticlesPageComponent,
    AdvicePageComponent,
    ArticleComponent,
    TopBtnComponent,
    Article2Component,
    Article3Component,
    Article4Component,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'homepage', component: HomepageComponent},
      {path: 'focus', component: FocusPageComponent},
      {path: 'articole', component: ArticlesPageComponent},
      {path: 'articole/Cum-ne-afecteaza-fazele-lunii', component: ArticleComponent},
      {path: 'articole/Puterea-cristalelor-mit-sau-realitate', component: Article2Component},
      {path: 'articole/Despre-respiratie', component: Article3Component},
      {path: 'articole/Pozitivitate-un-lucru-rar-în-secolul-21', component: Article4Component},
      {path: 'sfaturi', component: AdvicePageComponent},
      {path: 'contact', component: ContactPageComponent}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'focus', component: FocusPageComponent},
  {path: 'articole', component: ArticlesPageComponent},
  {path: 'sfaturi', component: AdvicePageComponent}
];
