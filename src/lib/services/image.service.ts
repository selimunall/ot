import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class ImageService {
  #http = inject(HttpClient);
  #firestore = inject(Firestore);
  item: any;
  get(): void {
    // this.#http.get('');
    const itemCollection = collection(this.#firestore, 'items');
    collectionData(itemCollection).subscribe((m) => {
      console.log(m);
    });
  }
}
