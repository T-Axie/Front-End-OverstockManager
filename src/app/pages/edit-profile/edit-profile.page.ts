import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from "@angular/router";
declare let cloudinary: any ;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder, private userService: UserService, private router: Router) { }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required]],
      urlimage: ['../../assets/therence.png', [Validators.required]]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      this.userService.update(this.ionicForm.value).subscribe(
        () => {
          this.router.navigate(['tabs/account']);
        },
        error => this.router.navigate(['tabs/account'])
      );
    }
  }
  cloudinaryGo(){
    const myWidget = cloudinary.createUploadWidget(
      {
        cloudName: 'dbh5ogmne',
        uploadPreset: 'imgupload'
      },
      (error: any, result: any) => {
        if (!error && result && result.event === 'success') {
          this.ionicForm.patchValue({urlimage: result.info.url});
          console.log(this.ionicForm);
        }
      }
    );
    myWidget.open();
  }
}
