import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.page.html',
  styleUrls: ['./form-a.page.scss'],
})
export class FormAPage {

  A= true;
  A1= false;
  A2= false;

  constructor(private alertController:AlertController) { }

  async salir(){
    const alert = await this.alertController.create({
      header: '¿Seguro que desae salir?',
      message: 'Se perderan los datos que no se hayan guardado',
      buttons:[
        {text: 'No',
          handler: ()=>{
            
          }
        },
        {
          text: 'si',
          handler: () => {
            this.hide()
          }
        }
      ]
    })
    await alert.present()
  }

  showA1(){
    this.A= false;
    this.A1= true;
  }

  showA2(){
    this.A= false;
    this.A2= true;
  }

  hide(){
    this.A= true;
    this.A1= false;
    this.A2= false;
  }
}
