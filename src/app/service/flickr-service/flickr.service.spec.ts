import { TestBed, inject } from '@angular/core/testing';

import { FlickrService } from './flickr.service';

describe('FlickrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlickrService]
    });
  });

  it('should be created', inject([FlickrService], (service: FlickrService) => {
    expect(service).toBeTruthy();
  }));

  it('should build search query string', inject([FlickrService], (service: FlickrService) => {
    expect(service.getURL('car cat')).toContain('&&tags=car,cat');
  }))
});
