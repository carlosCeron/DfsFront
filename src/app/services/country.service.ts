import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) { }

    getCountries() {
    return this.http.get<any>('https://restcountries.eu/rest/v2/all')
      .toPromise()
      .then(res => {
          return res;
      });
    }
}