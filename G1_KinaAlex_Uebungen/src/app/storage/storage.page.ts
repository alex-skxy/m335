import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StorageService} from "../_services/storage.service";

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {
  storageForm: FormGroup;
  db: any;

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.storageForm = new FormGroup({
      key: new FormControl(),
      value: new FormControl()
    })
  }

  async save() {
    await this.storageService.set(this.storageForm.get('key').value, this.storageForm.get('value').value);
    this.storageForm.reset();
    this.db = await this.storageService.keys();
  }
}
