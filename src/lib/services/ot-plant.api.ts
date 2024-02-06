import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class PlantApi {
  #http = inject(HttpClient);
  #baseUrl = 'trefle/genus?token=nj85GX3hqY9qwWErG7gDpxXMDqbkHQ6Z4rpIgEeHM_s';

  get(path?: string): Promise<any> {
    return lastValueFrom(this.#http.get(this.#baseUrl));
  }
}
