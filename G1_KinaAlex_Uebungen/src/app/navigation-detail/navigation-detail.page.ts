import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navigation-detail',
  templateUrl: './navigation-detail.page.html',
  styleUrls: ['./navigation-detail.page.scss'],
})
export class NavigationDetailPage implements OnInit {

  public previousPage: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.previousPage = this.route.snapshot.paramMap.get('previousPage');
    console.log(this.previousPage);
  }

  async goBack() {
    await this.router.navigateByUrl(this.previousPage);
  }
}
