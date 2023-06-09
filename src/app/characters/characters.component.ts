import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap, from } from 'rxjs';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  data: any;
  results: any;

  @Input() name = '';
  @Input() planet = '';
  @Input() vehicles = '';
  @Input() starship = '';

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.apiService.getPeopleData().subscribe((res:any) => {
      this.results = res.results;
      console.log(this.results);
      if (this.results && this.results.length > 0) {
        for (let i = 0; i < this.results.length; i++) {

          const currentResult = this.results[i];
          this.name = currentResult.name;            
        }      
      }
    });
  }

  

}
