import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HomePlanetService {

  constructor(private http: HttpClient) {}

   apiRoot: string = 'https://swapi.co/api/planets';

  getPlanetsList(page: number) {
    const requestUrl =`${this.apiRoot}?page=${page+1}`;
    return this.http.get(requestUrl);
   }

  getPlanetByUrl(planetUrl:string) {
      let apiURL: string  = planetUrl;
      return  this.http.get(apiURL);
   }


}
