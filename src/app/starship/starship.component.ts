import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit{

  data:any;
  results:any;

  constructor(private apiService: ApiServiceService){

  }

  ngOnInit(){
    this.apiService.getStarshipData().subscribe(res => {
        this.data = res;
        this.results = this.data.results;
        return console.log(this.results);
      }
    )}
}
