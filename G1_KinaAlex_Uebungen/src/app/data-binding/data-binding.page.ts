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

  // copy pasted from https://stackoverflow.com/a/64809213 :)
  numericOnly($event: KeyboardEvent) {
    const pattern = /^([0-9])$/;
    return pattern.test($event.key);
  }
}
