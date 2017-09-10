import { FlickrService } from './service/flickr-service/flickr.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ImageListComponent } from './common/image-list/image-list.component';
import { ImageListItemComponent } from './common/image-list-item/image-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './common/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ImageListComponent,
    ImageListItemComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    FormsModule,
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
