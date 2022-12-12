import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavCategoriesComponent } from './home/nav-categories/nav-categories.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { BodyCategoriesComponent } from './home/body-categories/body-categories.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavCategoriesComponent,
    CarouselComponent,
    BodyCategoriesComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
