import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getPeopleData()
  {
    return this.http.get(`https://swapi.dev/api/people`);
  }

  getPlanetData()
  {
    return this.http.get('https://swapi.dev/api/planets');
  }

  getStarshipData()
  {
    return this.http.get('https://swapi.dev/api/starships');
  }


}
