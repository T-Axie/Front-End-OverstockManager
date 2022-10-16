import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
declare let cloudinary: any ;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
    }
  }
  cloudinaryGo(){
    const myWidget = cloudinary.createUploadWidget(
      {
        cloudName: 'dbh5ogmne',
        uploadPreset: '<YOUR_PRESET>'
      },
      (error: any, result: any) => {
        if (!error && result && result.event === 'success') {
          this.ionicForm.patchValue({image: result.info.url});
        }
      }
    );

    myWidget.open();
  }
}
