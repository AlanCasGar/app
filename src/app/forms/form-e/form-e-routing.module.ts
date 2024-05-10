import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormEPage } from './form-e.page';

const routes: Routes = [
  {
    path: '',
    component: FormEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormEPageRoutingModule {}
