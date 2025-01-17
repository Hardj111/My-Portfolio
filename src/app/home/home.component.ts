import { Component } from '@angular/core';
import { LABELS } from 'src/assets/label';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  homeLabel:any;

  constructor(){
    this.homeLabel = LABELS.home;
  }

}
