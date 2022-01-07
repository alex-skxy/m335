import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  time = Date.now();

  constructor() {
  }

  ngOnInit() {
  }

}
