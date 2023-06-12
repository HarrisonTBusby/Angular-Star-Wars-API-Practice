import { Injectable, Input, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  pageLength = 0;
  
  @Input()
  page = 0;



  getPeopleData(page:number)
  {
    return this.http.get(`https://swapi.dev/api/people/?page=${page}`);
  }

  getPlanetData(page:number)
  {
    return this.http.get(`https://swapi.dev/api/planets/?page=${page}`);

  }

  getVehicleData(){
    return this.http.get('https://swapi.dev/api/vehicles');
  }

  getStarshipData(page:number)
  {
    return this.http.get(`https://swapi.dev/api/starships/?page=${page}`);
  }

  getSearchData(param:string){
    return this.http.get(`https://swapi.dev/api/people/?search=${param}`);
  }
  


}
