import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table-starship',
  templateUrl: './table-starship.component.html',
  styleUrls: ['./table-starship.component.css']
})
export class TableStarshipComponent implements OnInit{

  @Input() name = '';
  @Input() costInCredits = '';
  @Input() hyperdriveRating = '';
  @Input() length = '';
  @Input() passengers = '';

  ngOnInit(): void {
    
  }

}
