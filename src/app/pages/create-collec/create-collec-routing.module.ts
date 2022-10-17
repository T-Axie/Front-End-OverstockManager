import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCollecPage } from './create-collec.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCollecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCollecPageRoutingModule {}
