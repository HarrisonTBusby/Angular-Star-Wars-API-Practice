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

  constructor(private apiService: ApiServiceService, private http: HttpClient) {}

  getData(param: any): Observable<any> {
    return this.http.get<any>(param);
  }

  ngOnInit() {
    this.apiService.getPeopleData().subscribe((res:any) => {
      this.results = res.results;
      console.log(this.results);
      if (this.results && this.results.length > 0) {
        for (let i = 0; i < this.results.length; i++) {

          const currentResult = this.results[i];
          this.name = currentResult.name;
          const getPlanet = currentResult.homeworld;

          this.getData(getPlanet).subscribe((planetRes:any) => {
            const planetActual = planetRes.name;
            this.planet = planetActual;
          });

          // const vehicleUrls = currentResult.vehicles;
          // const vehicleObservables = vehicleUrls.map((url: any) => this.getData(url));

          // from(vehicleObservables).pipe(
          //   concatMap((observable:any) => observable)
          // ).subscribe((vehicleRes:any) => {
          //   this.vehicles = vehicleRes.name;
          // });

          // const starshipUrls = currentResult.starships;
          // const starshipObservables = starshipUrls.map((url:any) => this.getData(url));

          // from(starshipObservables).pipe(
          //   concatMap((observable:any) => observable)
          // ).subscribe((starshipRes:any) => {
          //   this.starship = starshipRes.name;
          // });
        }
      }
    });
  }
}
