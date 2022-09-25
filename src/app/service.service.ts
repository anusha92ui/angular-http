import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() {
    

   }

   printData(data: any) {
    console.log(data);
    this.http.post(
      'https://console.firebase.google.com/u/0/project/database-project-35ad1/database/database-project-35ad1-default-rtdb/data/~2F/posts.json',
      data).subscribe(responseData =>
        {
          console.log(responseData);
          console.log()
        },
        () => {

        }, () => {

        })
        ;

   }
}
