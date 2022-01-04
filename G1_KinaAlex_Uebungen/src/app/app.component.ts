import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Navigation', url: '/navigation', icon: 'compass'},
    {title: 'NavigationDetail', url: '/navigation-detail', icon: 'paper-plane'},
  ];

  constructor() {
  }
}
