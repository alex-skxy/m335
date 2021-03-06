import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  async openNavigationDetail() {
    await this.router.navigate(['/navigation-detail', {previousPage: this.router.url}]);
  }
}
