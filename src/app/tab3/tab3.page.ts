import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController:AlertController) {}

  async filterH(){
    const alert = await this.alertController.create({
      header: 'Filtrar',
      inputs: [
      {
        placeholder: 'Numero del corte'
      },
      {
        type: 'number',
        placeholder: 'Linea de prodccuicion',
        min: 1,
        max: 6
      },
      {
        type: 'date',
        placeholder: 'Fecha de entrega',
      }],
      buttons: [{
        text: 'Filtrar',
        handler: () => {
          console.log("filtrado")
        }
      }]
    })
    await alert.present()
  }

}
