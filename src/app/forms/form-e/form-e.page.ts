import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form-e',
  templateUrl: './form-e.page.html',
  styleUrls: ['./form-e.page.scss'],
})
export class FormEPage {

  E= true;
  E1= false;
  E2= false;

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

 showE1(){
    this.E= false;
    this.E1= true;
  }

  showE2(){
    this.E= false;
    this.E2= true;
  }

  hide(){
    this.E= true;
    this.E1= false;
    this.E2= false;
  }
}
