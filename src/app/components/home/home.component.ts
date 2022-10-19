import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
              '../home/admin.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  asb ()  {
    var burger = <HTMLElement>document.querySelector('.burger');
    
    var menu = <HTMLElement> document.querySelector('#'+burger.dataset["target"]);
    
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    
  }
  viewMenu (){
    let menu2 = <HTMLElement> document.getElementById('menu2');
    menu2.classList.toggle('is-hidden-mobile');
}
activeStyleItem(activo:boolean){
  return activo ?
        {'background': '#3273dc','color': 'white'}:
        {}
  }
}
