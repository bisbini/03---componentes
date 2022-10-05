import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  result: string;

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  componentes: Componente[] = [
    {
    icon: 'arrow-redo-circle-outline',
    name: 'Inicio',
    redirectTo: '/inicio'
    },
    {
      icon: 'arrow-redo-circle-outline',
      name: 'Alerts',
      redirectTo: '/alert'
      }
  ];

  onClick(){
    this.presentActionSheet();

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Encabezado',
      subHeader: 'Subencabezado',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }


}
