import { FlickrService } from './service/flickr-service/flickr.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ImageListComponent } from './common/image-list/image-list.component';
import { ImageListItemComponent } from './common/image-list-item/image-list-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ImageListComponent,
    ImageListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
