import { JsonpModule } from '@angular/http';
import { TestBed, inject, async } from '@angular/core/testing';

import { FlickrService } from './flickr.service';
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';

describe('FlickrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule],
      providers: [FlickrService]
    });
  });

  it('should be created', inject([FlickrService], (service: FlickrService) => {
    expect(service).toBeTruthy();
  }));

  it('should build search string', inject([FlickrService], (service: FlickrService) => {
    expect(service['buildSearchQuery']('car cat')).toBe('&&tags=car,cat');

  }));

  it('should build URL with seach string', inject([FlickrService], (service: FlickrService) => {
    expect(service.getURL('car cat')).toContain('&&tags=car,cat');
  }))

  it('should get data from Flickr', inject([FlickrService], async (service: FlickrService) => {
    const img = await service['getImageList']('');
    expect(img).toBeTruthy();
  }))
});
