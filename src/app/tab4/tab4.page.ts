import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {

  EDIT = true;

  constructor(private alertController: AlertController) {}

  async filterA(){
    const alert = await this.alertController.create({
      header: 'Filtrar',
      inputs: [
      {
        placeholder: 'Insumo'
      },
      {
        placeholder: 'Numero de serie'
      },
      {
        type: 'number',
        placeholder: 'Cantidad'
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
