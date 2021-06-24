import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: string = "";
  @Input() text: string = "";
  @Input() link: string = "";
  @Input() navigate: string = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    
  }

  openLink(){
    if(this.link){
      window.open(this.link);
    }else{
      // this.router.navigate(['/login'])
    }
  }

}
