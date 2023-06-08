import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

data:any;
results:any;

  constructor(private apiService: ApiServiceService){

  }

  ngOnInit(){
    this.apiService.getPlanetData().subscribe(res => {
        this.data = res;
        this.results = this.data.results;
        return console.log(this.results);
      }
    )}

}
