import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit{

  data:any;
  results:any;

  @Input() name = '';
  @Input() costInCredits = '';
  @Input() hyperdriveRating = '';
  @Input() length = '';
  @Input() passengers = '';

  constructor(private apiService: ApiServiceService){

  }

  ngOnInit(){
    this.apiService.getStarshipData().subscribe((res:any) => {
      this.results = res.results;
      console.log(this.results);
      if (this.results && this.results.length > 0) {
        for (let i = 0; i < this.results.length; i++) {

          const currentResult = this.results[i];
          this.name = currentResult.name;
          this.costInCredits = currentResult.cost_in_credits;
          this.hyperdriveRating = currentResult.hyperdrive_rating;           
          this.length = currentResult.length; 
          this.passengers = currentResult.passengers;
        }      
      }
    });}
}
