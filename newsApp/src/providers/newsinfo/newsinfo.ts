import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvProvider } from '../env/env';
/*
  Generated class for the NewsinfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsinfoProvider {

  constructor(public http: HttpClient, private env: EnvProvider) {
    console.log('Hello NewsinfoProvider Provider');
  }

  // request data
  getIdNews(){
    return this.http.get(this.env.API_URL).pipe(
    response => {
      return response;
        })
    }

}
