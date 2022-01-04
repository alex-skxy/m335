import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.page.html',
  styleUrls: ['./data-binding.page.scss'],
})
export class DataBindingPage implements OnInit {
  user = {name: '', lastname: '', age: 0};

  constructor() {
  }

  ngOnInit() {
  }

}
