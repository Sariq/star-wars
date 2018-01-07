import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }
  getIdFromUrl(url:string){
    let parts = url.split('/');
    let id = parts[parts.length - 2]; 
    return id;
  }

}
