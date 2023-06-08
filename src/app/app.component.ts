import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './Services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    data:any;
    results:any;

  constructor(private apiService: ApiServiceService){}

  ngOnInit(){
    this.apiService.getData().subscribe(res => {
        this.data = res;
        console.log(res)
      }
    )
    
}
}