import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() page: string = '';
  @Output() search: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Input()
  results: any[] = []; // Initialize results as an empty array
  searchQuery: string = '';

  constructor(private router: Router, private apiService: ApiServiceService) {}

  Nav(path: string) {
    this.router.navigate([path]);
  }

  getData() {
    this.apiService.getSearchData(this.page, this.searchQuery).subscribe((res: any) => {
      this.results = res.results;
      this.search.emit(this.results); // Emit the results to the parent component
    });
  }
}
