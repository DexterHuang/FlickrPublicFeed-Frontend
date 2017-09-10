import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter();
  searchText: string
  constructor() { }

  ngOnInit() {
  }
  onClickSearch() {
    this.search.emit(this.searchText);
  }
}
