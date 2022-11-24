import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfases/interfases';
import { DataService } from './services/data.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes:Observable<Componente[]>;
  

  constructor(
    private dataService: DataService,
    private platform: Platform,
  ) {
    this.initializeApp();
  }


    initializeApp(){
      this.platform.ready().then(() => {
        this.componentes = this.dataService.getMenuOpts();

      })
    }

}
