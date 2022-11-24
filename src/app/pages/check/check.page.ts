import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data=[
    {name: 'Opcion 1',
    selected: false},

    {name: 'Opcion 2',
    selected: false},

    {name: 'Opcion 3',
    selected: true},

    {name: 'Opcion 4',
    selected: false},

    {name: 'Opcion 5',
    selected: false}

  ]

  constructor() { }

  ngOnInit() {
  }

}
