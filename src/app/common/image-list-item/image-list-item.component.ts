import { Image } from './../../Model/Image';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.css']
})
export class ImageListItemComponent implements OnInit {
  @Input() image: Image;
  constructor() { }

  ngOnInit() {
  }

}
