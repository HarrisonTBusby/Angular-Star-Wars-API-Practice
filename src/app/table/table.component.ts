import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap, defaultIfEmpty, from, toArray } from 'rxjs';

@Component({
  selector: 'table-char',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

  @Input() name = '';
  @Input() planet='';
  @Input() vehicles='';
  @Input() starship='';

  myPlanet='';
  myVehicle='';
  myStarship='';

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.getPlanetData();
    this.getVehicleData();
    this.getStarshipData();
  }

  getPlanetData(){
    this.getData(this.planet).subscribe((planetRes:any) => {
      const planetActual = planetRes.name;
      this.myPlanet = planetActual;
    });
  }

  getVehicleData() {
    if (Array.isArray(this.vehicles) && this.vehicles.length > 0) {
      const vehicleObservables = this.vehicles.map((url: string) => this.getData(url));
  
      from(vehicleObservables).pipe(
        concatMap((observable: Observable<any>) => observable),
        toArray(),
        defaultIfEmpty([])
      ).subscribe((vehicleRes: any[]) => {
        const vehicleNames = vehicleRes.map((vehicle: any) => vehicle.name);
        this.myVehicle = vehicleNames.join(', ');
      });
    } else {
      this.myVehicle = 'N/A';
    }
  }

  getStarshipData()
  {
    if (Array.isArray(this.starship) && this.starship.length > 0) {
      const starshipObservables = this.starship.map((url: string) => this.getData(url));
  
      from(starshipObservables).pipe(
        concatMap((observable: Observable<any>) => observable),
        toArray(),
        defaultIfEmpty([])
      ).subscribe((starshipRes: any[]) => {
        const starshipNames = starshipRes.map((starship: any) => starship.name);
        this.myStarship = starshipNames.join(', ');
      });
    } else {
      this.myStarship = 'N/A';
    }
  }

  getData(param:string){
    return this.http.get(param)
  }

}
