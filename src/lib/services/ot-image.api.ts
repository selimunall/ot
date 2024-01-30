import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ListResult, getBlob, getStorage, listAll, ref } from '@angular/fire/storage';

@Injectable({ providedIn: 'root' })
export class ImageApi {
  #firestore = inject(Firestore);
  storage = getStorage(this.#firestore.app);

  getPaths(path: string): Promise<ListResult> {
    const strRef = ref(this.storage, path);
    return listAll(strRef);
  }

  getImage(path: string): Promise<Blob> {
    const rf = ref(this.storage, path);
    return getBlob(rf);
  }
}
