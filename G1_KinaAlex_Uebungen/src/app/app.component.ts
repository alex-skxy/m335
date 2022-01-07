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
    {title: 'NumbersTest', url: '/test/numbers', icon: 'stats-chart'},
    {title: 'StringTest', url: '/test/string', icon: 'text'},
    {title: 'ObjectsTest', url: '/test/objects', icon: 'basketball'},
    {title: 'ArrayTest', url: '/test/array', icon: 'pricetags'},
    {title: 'DataBinding', url: '/data-binding', icon: 'git-compare'},
    {title: 'Calculator', url: '/calculator', icon: 'calculator'},
    {title: 'Filters/Pipes', url: '/filters', icon: 'filter'},
  ];

  constructor() {
  }
}
