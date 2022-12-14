import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {AlertController, LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]]
    });
  }
    async login() {
      const loading = await this.loadingController.create();
      await  loading.present();
      this.authService.login(this.credentials.value).subscribe(
        async (data) => {
          await loading.dismiss();
          await this.router.navigateByUrl('/tabs', {
            replaceUrl: true
          });
        },
        async (res) => {
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'login failed',
            message: res.error.error,
            buttons: ['ok'],
          });
          await  alert.present();
        }
      );

  }
  get email() {
    return this.credentials.get('email');
  }
  get password() {
    return this.credentials.get('password');
  }
}
