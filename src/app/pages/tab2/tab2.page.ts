import {Component, OnInit} from '@angular/core';
import {CollecService} from '../../services/CollecService';
import {ICollec} from './ICollec';
import {Router} from '@angular/router';
import {AlertController} from "@ionic/angular";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  num: any = 1;
  listCollec!: ICollec[];
  listCard!: any;

  constructor(private collecService: CollecService, private router: Router, private alertController: AlertController) {
    this.collecService.getALL().subscribe(data => {
      console.log(data);
      this.listCollec = data;
    });
  }
  restock() {
    this.collecService.restock(this.num).subscribe(
        (data) => {
          this.listCard = data;
        },
        error => console.log(error)
      );
    }
  delete() {
    this.collecService.delete(this.num).subscribe(
      () => {},
      error => console.log(error)
    );
  }
  initializeStock() {
    this.collecService.initializeStock().subscribe(
      () => {},
      error => console.log(error)
    );
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.delete();
          }
        },
      ],
    });

    await alert.present();
  }
}
