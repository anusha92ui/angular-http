import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  name : string ;

   headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })

  constructor(private http: HttpClient, private service: ServiceService) {}

  ngOnInit() {}

  onCreatePost(krishna: any) {
    // Send Http request
    console.log(krishna.value['krishna']);
    this.service.printData(krishna);

  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
