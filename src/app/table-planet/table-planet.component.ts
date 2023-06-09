import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'table-planet',
  templateUrl: './table-planet.component.html',
  styleUrls: ['./table-planet.component.css']
})
export class TablePlanetComponent implements OnInit{

  data: any;
  results: any;

  @Input() name = '';
  @Input() climate = '';
  @Input() terrain = '';
  @Input() population = '';




  constructor(){}

  ngOnInit() {
    
  }

  
}
