import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  randNumber = Math.round(Math.random() * 82);

  getData()
  {
    return this.http.get(`https://swapi.dev/api/people/${this.randNumber}`);
  }
}
