import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavCategoriesComponent } from './nav-categories/nav-categories.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BodyCategoriesComponent } from './body-categories/body-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavCategoriesComponent,
    CarouselComponent,
    BodyCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
