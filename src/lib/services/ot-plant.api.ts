import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlantApi {
  #http = inject(HttpClient);

  // getPlants(path: string): Promise<any> {
  //   return lastValueFrom(this.#http.get())
  // }
}
