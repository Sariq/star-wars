import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CharactersService {

  constructor(private http: HttpClient) {
    //this.results = [];
    this.loading = false;
  }

   apiRoot: string = 'https://itunes.apple.com/search';
  //results: SearchItem[];
  loading: boolean;



  getCharactersList(page: number) {
    const href = 'https://swapi.co/api/people';
    const requestUrl =
        `${href}?page=${page+1}`;
    return this.http.get(requestUrl);
   }

}
