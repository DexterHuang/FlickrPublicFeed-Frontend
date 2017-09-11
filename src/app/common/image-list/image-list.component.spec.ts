import { ImageListItemComponent } from './../image-list-item/image-list-item.component';
import { ImageList } from './../../Model/ImageList';
import { HttpModule, JsonpModule, Jsonp, Http } from '@angular/http';
import { FlickrService } from './../../service/flickr-service/flickr.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ImageListComponent } from './image-list.component';

describe('ImageListComponent', () => {
  let component: ImageListComponent;
  let fixture: ComponentFixture<ImageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageListComponent, ImageListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageListComponent);
    component = fixture.componentInstance;
    component.imageList = new ImageList();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
