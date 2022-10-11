import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public http: HttpClient) {
    this.readAPI('http://localhost:8080/swagger-ui/index.html#/user-controller/getOne/1')
      .subscribe((data) => {
        console.log(data);
      })
    ;
  }



  readAPI(url: string) {
    return this.http.get(url);
  }
}
