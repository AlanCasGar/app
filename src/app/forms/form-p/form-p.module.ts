import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPPageRoutingModule } from './form-p-routing.module';

import { FormPPage } from './form-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPPageRoutingModule
  ],
  declarations: [FormPPage]
})
export class FormPPageModule {}
