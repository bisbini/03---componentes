import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNaci: Date  = new Date();

  customPickerOptions = {

  buttons: [
    {text:'Hola'},

    {text: 'Chau'}

  ]

}


  constructor() { }

  ngOnInit() {
  }

}
