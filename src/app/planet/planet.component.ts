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

length:any;

@Input() name = '';
@Input() climate = '';
@Input() terrain = '';
@Input() population = '';

@ViewChild(MatPaginator)
paginator!: MatPaginator;

  constructor(private apiService: ApiServiceService){

  }

  ngOnInit(){
    this.apiService.getPlanetData(this.paginator.pageIndex).subscribe((res:any) => {
      this.results = res.results;
      this.length = res.results.count;
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
}
