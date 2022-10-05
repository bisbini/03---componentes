import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( private alertController: AlertController) { }

  ngOnInit() {
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Formulario de inscripcion',
      buttons: ['Enviar'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Nombre de usuario (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Caja de comentarios',
        },

      ],
    });

    await alert.present();
  }







  componentes: Componente[] = [
    {
    icon: 'arrow-redo-circle-outline',
    name: 'Inicio',
    redirectTo: '/inicio'
    },
    {
      icon: 'arrow-redo-circle-outline',
      name: 'Action-Sheet',
      redirectTo: '/action-sheet'
      }
  ];

}
