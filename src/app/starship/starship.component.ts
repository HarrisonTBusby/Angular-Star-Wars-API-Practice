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

  @Input() page:string = 'starships'
  @Input() name = '';
  @Input() costInCredits = '';
  @Input() hyperdriveRating = '';
  @Input() length = '';
  @Input() passengers = '';
  count = 1;

  constructor(private apiService: ApiServiceService){

  }

  nextPage() {
    if (this.count < 4) {
        this.count++;
        this.getShipData(this.count);
    }
}

  previousPage() {
    if (this.count > 0) {
        this.count--;
        this.getShipData(this.count);
    }
}

getShipData(number: number) {
  this.apiService.getStarshipData(number).subscribe((res: any) => {
      this.results = res.results;
      console.log(this.results);
      if (this.results && this.results.length > 0) {
          for (let i = 0; i < this.results.length; i++) {
              const currentResult = this.results[i];
              this.name = currentResult.name;
              this.costInCredits = currentResult.cost_in_credits === 'unknown' ? 'N/A' : currentResult.cost_in_credits;
              this.hyperdriveRating = currentResult.hyperdrive_rating;
              this.length = currentResult.length;
              this.passengers = currentResult.passengers;
          }
      }
  });
}


  ngOnInit(){
    this.getShipData(this.count);
  }
}
