import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-array-test',
  templateUrl: './array-test.page.html',
  styleUrls: ['./array-test.page.scss'],
})
export class ArrayTestPage implements OnInit {
  fruechte: any[] = [
    {name: 'Orange'},
    {name: 'Banane'},
    {name: 'Apfel'},
  ];
  private JSON = window.JSON;


  constructor() {
  }

  ngOnInit() {
  }

}
