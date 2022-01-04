import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-menu-header',
  templateUrl: './nav-menu-header.component.html',
  styleUrls: ['./nav-menu-header.component.scss'],
})
export class NavMenuHeaderComponent implements OnInit {
  @Input() pageName: string;

  constructor() {
  }

  ngOnInit() {
  }

}
