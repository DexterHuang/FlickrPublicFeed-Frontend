import { FlickrService } from './../../service/flickr-service/flickr.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public flickr: FlickrService) { }

  ngOnInit() {

  }

}
