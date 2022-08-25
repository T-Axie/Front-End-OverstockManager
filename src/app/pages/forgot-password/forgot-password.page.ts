import { Component, OnInit } from '@angular/core';
import {Preferences} from '@capacitor/preferences';
import {INTRO_KEY} from '../../guards/intro.guard';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async start() {
    await this.router.navigateByUrl('/forgot-password', {replaceUrl: true});
  }
}
