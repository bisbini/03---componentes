import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}





@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
    icon: 'arrow-redo-circle-outline',
    name: 'Action Sheet',
    redirectTo: '/action-sheet'
    },
    {
      icon: 'arrow-redo-circle-outline',
      name: 'Alerts',
      redirectTo: '/alert'
      },
      {
        icon: 'arrow-redo-circle-outline',
        name: 'Avatar',
        redirectTo: '/avatar'
        },
        {
          icon: 'arrow-redo-circle-outline',
          name: 'Botones',
          redirectTo: '/button'
          },
        {
            icon: 'arrow-redo-circle-outline',
            name: 'Cards',
            redirectTo: '/card'
          }
  ];
  
  
  
  
  constructor() { }

  ngOnInit() {
  }

}
