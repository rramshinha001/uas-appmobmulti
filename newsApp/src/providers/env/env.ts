import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EnvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnvProvider {

  API_URL= 'https://newsapi.org/v2/top-headlines?country=id&apiKey=d0bf862238914eff88a263b77d6831ef';

  constructor(public http: HttpClient) {
    console.log('Hello EnvProvider Provider');
  }

}
