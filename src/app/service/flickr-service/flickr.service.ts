import { ImageList } from './../../Model/ImageList';
import { Http, Jsonp } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FlickrService {

  private imageList: ImageList;
  private loading = true;
  constructor(private http: Http, private jsonp: Jsonp) {
    this.refreshFeed()
  }

  // Feed is downloaded and chached
  public refreshFeed(searchText = '') {
    this.loading = true;
    // Making JSONP request directly to Flickr
    this.jsonp.request(this.getURL(searchText), {
      method: 'GET'
    }).subscribe(r => {
      const jsonObject = r.json()
      const imageList = new ImageList();
      Object.assign(imageList, jsonObject);
      this.imageList = imageList;
      this.loading = false;
    })
  }
  public getURL(searchText = '') {
    const base = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&&jsoncallback=JSONP_CALLBACK';
    if (searchText.length > 0) {
      return base + this.buildSearchQuery(searchText);
    }
    return base;
  }
  private buildSearchQuery(searchText: string) {
    searchText = searchText.trim();
    while (searchText.indexOf(' ') >= 0) {
      searchText = searchText.replace(' ', ',');
    }
    return '&&tags=' + searchText;
  }
  public getFeed(): ImageList {
    return this.imageList;
  }
  public isLoading() {
    return this.loading;
  }
  // Escape Unwanted chracters
  public cleanString(str: string) {
    let string = str;
    string = string.replace(/\\n/g, '\\n')
      .replace(/\\'/g, `\\\'`)
      .replace(/\\"/g, '\\"')
      .replace(/\\&/g, '\\&')
      .replace(/\\r/g, '\\r')
      .replace(/\\t/g, '\\t')
      .replace(/\\b/g, '\\b')
      .replace(/\\f/g, '\\f');
    // remove non-printable and other non-valid JSON chars
    string = string.replace(/[\u0000-\u0019]+/g, '');
    return string;
  }
}
