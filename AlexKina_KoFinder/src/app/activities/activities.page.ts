import {Component, OnInit} from '@angular/core';
import {Activity} from "../server-mock/types";
import {ServerMock} from "../server-mock/server-mock";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  serverMock = new ServerMock();
  activities: Activity[];

  constructor() {
  }

  ngOnInit() {
    this.activities = this.serverMock.getActivites();
  }
}
