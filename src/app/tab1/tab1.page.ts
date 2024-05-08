import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  EDIT = true;
  
  constructor(private alertController:AlertController) {}

  async create(){
    const alert = await this.alertController.create({
      header: 'Subir corte',
      inputs: [
        {
          placeholder: 'No. de corte',
        },
        {
          placeholder: 'Linea encargada',
          type: 'number',
          min: 1,
          max: 6
        }
      ],
      buttons: [{
        text: 'Añadir',
        handler: () => {
          console.log("Añadido")
        }
      }]
    })
    await alert.present()
  }

  async update(){
    const alert = await this.alertController.create({
      header: 'Subir corte',
      inputs: [
        {
          placeholder: 'Linea encargada',
          type: 'number',
          min: 1,
          max: 6
        },
        {
          placeholder: 'No. de corte',
        },
        {
          placeholder: 'Cantidad realizada',
          type: 'number'
        }
      ],
      buttons: [{
        text: 'Actualizar',
        handler: () => {
          console.log("Actualizado")
        }
      }]
    })
    await alert.present()
  }
}
