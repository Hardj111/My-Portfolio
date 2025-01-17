import { Component } from '@angular/core';
import { LABELS } from 'src/assets/label';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navbarLabels:any; 
  show:boolean=false;

  constructor (){

    this.navbarLabels = LABELS.navbar;
  }

}
