import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement){
    console.log(2);
    
    console.log(el);
    
    el.scrollIntoView();
  }

}
