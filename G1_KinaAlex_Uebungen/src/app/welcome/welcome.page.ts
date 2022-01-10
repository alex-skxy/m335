import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../_services/storage.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private router: Router, private storageService: StorageService) {
  }

  ngOnInit() {
  }

  go() {
    this.router.navigateByUrl('/');
  }
}
