import { ImageList } from './../../Model/ImageList';
import { FlickrService } from './../../service/flickr-service/flickr.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  @Input() imageList: ImageList;
  constructor() { }

  ngOnInit() {
  }

}
