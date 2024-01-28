import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ListResult, getStorage, listAll, ref } from '@angular/fire/storage';

@Injectable({ providedIn: 'root' })
export class ImageService {
  #http = inject(HttpClient);
  #firestore = inject(Firestore);
  storage = getStorage(this.#firestore.app);
  storageRef = ref(this.storage);

  getStorage(): Promise<ListResult> {
    return listAll(this.storageRef);
  }

  get(): void {}
}
