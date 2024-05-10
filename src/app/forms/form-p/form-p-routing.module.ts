import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPPage } from './form-p.page';

const routes: Routes = [
  {
    path: '',
    component: FormPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPPageRoutingModule {}
