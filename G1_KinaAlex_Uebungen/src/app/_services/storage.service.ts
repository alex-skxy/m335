import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage$: Promise<Storage>;

  constructor(private storage: Storage) {
    this.init();
  }

  init() {
    this._storage$ = this.storage.create();
  }

  async set(key: string, value: any) {
    await (await this._storage$).set(key, value);
  }

  async get(key: string) {
    return (await this._storage$).get(key);
  }

  async keys() {
    return (await this._storage$).keys();
  }
}
