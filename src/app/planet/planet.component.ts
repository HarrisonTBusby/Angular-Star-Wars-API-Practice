import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

data:any;
results:any;

@Input() name = '';
@Input() climate = '';
@Input() terrain = '';
@Input() population = '';

count = 1;

  constructor(private apiService: ApiServiceService){

  }

  nextPage() {
    if (this.count < 7) {
        this.count++;
        this.getPData(this.count);
    }
}

  previousPage() {
    if (this.count > 0) {
        this.count--;
        this.getPData(this.count);
    }
}

  getPData(number:number){
    this.apiService.getPlanetData(number).subscribe((res:any) => {
      this.results = res.results;
      console.log(this.results);
      if (this.results && this.results.length > 0) {
        for (let i = 0; i < this.results.length; i++) {
          const currentResult = this.results[i];
          this.name = currentResult.name;
          this.climate = currentResult.climate;
          this.terrain = currentResult.terrain;           
          this.population = currentResult.population; 
        }      
      }
    });
  }

  ngOnInit(){
   this.getPData(this.count);
}
}
