import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user: any | null;

  constructor(public http: HttpClient, private userService: UserService) {
    this.userService.getUser().subscribe({
      next:data => {
        this.user = data;
      }
    });
  }
}
