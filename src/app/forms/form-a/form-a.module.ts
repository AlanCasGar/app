import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAPageRoutingModule } from './form-a-routing.module';

import { FormAPage } from './form-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAPageRoutingModule
  ],
  declarations: [FormAPage]
})
export class FormAPageModule {}
