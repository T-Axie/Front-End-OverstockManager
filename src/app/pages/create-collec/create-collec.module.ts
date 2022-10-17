import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCollecPageRoutingModule } from './create-collec-routing.module';

import { CreateCollecPage } from './create-collec.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateCollecPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CreateCollecPage]
})
export class CreateCollecPageModule {}
