import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              './admin.css']
})
export class AppComponent {
  title = 'frontend';
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
