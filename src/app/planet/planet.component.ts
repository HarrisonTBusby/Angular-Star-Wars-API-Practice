import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  @Input() page: string = 'planets';
  @Input() name: string = '';
  @Input() climate: string = '';
  @Input() terrain: string = '';
  @Input() population: string = '';

  count: number = 1;
  results: any;

  constructor(private apiService: ApiServiceService) {}
  

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

  

  ngOnInit() {
    this.getPData(this.count);
  }

  onSearch(results: any) {
   this.results = results;
  }

  getPData(number: number) {
    this.apiService.getPlanetData(number).subscribe((res: any) => {
      this.results = res.results;
    });
  }
}
