import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router, private authService: AuthenticationService) {}
  async logout() {
    await  this.authService.logout();
    await this.router.navigateByUrl('/', {replaceUrl: true});
  }

}
