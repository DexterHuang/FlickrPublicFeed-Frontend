import { ImageList } from './../../Model/ImageList';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FlickrService {

  imageList: ImageList;
  loading = true;
  constructor(private http: Http) {
    this.refreshFeed()
  }

  // Feed is downloaded and chached
  public refreshFeed() {
    this.loading = true;
    this.http.get('http://localhost:3000/api/v1/feeds').subscribe(r => {
      const jsonObject = r.json();
      const imageList = new ImageList();
      Object.assign(imageList, jsonObject);
      this.imageList = imageList;
      this.loading = false;
    })
  }
  public getFeed(): ImageList {
    return this.imageList;
  }
}
