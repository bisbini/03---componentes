import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(30); 

  @ViewChild (IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    //No es necesario usitilizando @viewchild
    console.log(event);

    

    setTimeout(() => {
      const nuevoArr = Array(20)

      if (this.data.length > 50){
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled= true;
        return
      }
      this.data.push(... nuevoArr);

      // Como Hago para que frene mi inf scroll en cierta cant de registros



      //event.target.complete();
      this.infiniteScroll.complete();
    }, 1500);

  }

}
