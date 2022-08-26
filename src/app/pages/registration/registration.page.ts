import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from "@angular/router";
import {AlertController, LoadingController} from "@ionic/angular";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  credentials: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)])
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController

  ) { }

  ngOnInit() {
  }
  async register() {
    if (this.credentials.valid) {
      const loading = await this.loadingController.create();
      await  loading.present();
      this.authService.register(this.credentials.value).subscribe(async (res) => {
          await loading.dismiss();
          await this.router.navigateByUrl('/login', {
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
  }
}
