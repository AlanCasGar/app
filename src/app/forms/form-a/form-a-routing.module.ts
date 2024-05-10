import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAPage } from './form-a.page';

const routes: Routes = [
  {
    path: '',
    component: FormAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAPageRoutingModule {}
