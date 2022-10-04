import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthenticationService) {}
  async logout() {
    await  this.authService.logout();
    await this.router.navigateByUrl('/', {replaceUrl: true});
  }
}
