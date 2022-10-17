import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CollecService} from '../../services/CollecService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-collec',
  templateUrl: './create-collec.page.html',
  styleUrls: ['./create-collec.page.scss'],
})
export class CreateCollecPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder, private collecService: CollecService, private router: Router) { }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      type: ['', [Validators.required]],
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      this.collecService.create(this.ionicForm.value).subscribe(
        () => {
          this.router.navigate(['tabs/collection']);
        },
        error => console.log(error)
      );

    }
  }
}
