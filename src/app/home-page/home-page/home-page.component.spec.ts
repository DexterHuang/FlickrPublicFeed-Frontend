import { FlickrServiceMock } from './../../Mock/FlickrServiceMock';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { FlickrService } from './../../service/flickr-service/flickr.service';
import { ImageListItemComponent } from './../../common/image-list-item/image-list-item.component';
import { FormsModule } from '@angular/forms';
import { ImageListComponent } from './../../common/image-list/image-list.component';
import { SearchBarComponent } from './../../common/search-bar/search-bar.component';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent,
        SearchBarComponent, ImageListItemComponent,
        ImageListComponent]
      ,
      imports: [
        FormsModule,
        HttpModule,
        JsonpModule
      ],
      providers: [FlickrService]
    }).overrideComponent(HomePageComponent, {
      set: {
        providers: [{ provide: FlickrService, useClass: FlickrServiceMock }]
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {

    expect(component).toBeTruthy();
  });
});
