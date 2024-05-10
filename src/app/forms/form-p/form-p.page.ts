import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form-p',
  templateUrl: './form-p.page.html',
  styleUrls: ['./form-p.page.scss'],
})
export class FormPPage {

  P= true;
  P1= false;
  P2= false;
  
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

  showP1(){
    this.P= false;
    this.P1= true;
  }

  showP2(){
    this.P= false;
    this.P2= true;
  }

  hide(){
    this.P= true;
    this.P1= false;
    this.P2= false;
  }
}
