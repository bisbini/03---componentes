import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  usuarios: Observable<any>;

  constructor( private DataService: DataService) { }

  ngOnInit() {


  
  //this.DataService.getUsuarios().subscribe (console.log); //como funciona el suscribe? en que casos se usa?
  this.usuarios= this.DataService.getUsuarios()

}
}