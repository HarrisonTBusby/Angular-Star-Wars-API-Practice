import { Component, Input } from '@angular/core';

@Component({
  selector: 'table-char',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() name = '';
  @Input() planet = '';
  @Input() vehicles = '';
  @Input() starship = '';

}
