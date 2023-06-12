import { Component, Input } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, private apiService: ApiServiceService){
    
  }
  @Input()
  page:string = '';


  searchQuery:string = '';

  Nav(path:string){
    this.router.navigate([path])
  }

  getData(){
    this.apiService.getSearchData(this.page ,this.searchQuery).subscribe(res => {
      console.log(res);
    })
  }
}
