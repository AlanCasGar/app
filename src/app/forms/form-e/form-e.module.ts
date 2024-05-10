import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormEPageRoutingModule } from './form-e-routing.module';

import { FormEPage } from './form-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormEPageRoutingModule
  ],
  declarations: [FormEPage]
})
export class FormEPageModule {}
