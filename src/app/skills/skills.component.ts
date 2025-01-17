import { Component } from '@angular/core';
import { LABELS } from 'src/assets/label';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skillsLabels:any;

  constructor(){
    this.skillsLabels=LABELS.skills;
  }

}
