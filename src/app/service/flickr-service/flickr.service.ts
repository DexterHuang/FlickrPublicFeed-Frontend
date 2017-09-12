import { ImageList } from './../../Model/ImageList';
import { Http, Jsonp } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FlickrService {

  private imageList: ImageList;
  private loading = true;
  constructor(private jsonp: Jsonp) {
    this.refreshFeed()
  }

  // Feed is downloaded and chached
  public async refreshFeed(searchText = '') {
    this.loading = true;
    this.imageList = await this.getImageList(searchText);
    this.loading = false;
  }

  // Make JSONP request directly to Flickr
  private async getImageList(searchText: string) {
    return new Promise<ImageList>((resolve, reject) => {
      this.jsonp.request(this.getURL(searchText), {
        method: 'GET'
      }).subscribe(r => {
        try {
          const jsonObject = r.json()
          const imageList = new ImageList();
          Object.assign(imageList, jsonObject);
          this.imageList = imageList;
          return resolve(this.imageList);
        } catch (e) {
          return reject('Unable to pharse data: ' + e);
        }
      })
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
}
