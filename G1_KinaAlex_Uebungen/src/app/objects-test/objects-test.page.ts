import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-objects-test',
  templateUrl: './objects-test.page.html',
  styleUrls: ['./objects-test.page.scss'],
})
export class ObjectsTestPage implements OnInit {
  person: any = {name: 'Rex', vorname: 'Alex'};

  constructor() {
  }

  ngOnInit() {
  }

}
