import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-skills',
  templateUrl: './our-skills.component.html',
  styleUrls: ['./our-skills.component.css']
})
export class OurSkillsComponent implements OnInit {

  modals: any[] = [false, false, false];

  constructor() { }

  ngOnInit() {
  }

  showInModal(item) {
    this.modals = [false, false, false]
    for (let i = 0; i < this.modals.length; i++) {
      if (item == i) {
        this.modals[i] = true;
      }
      else {
        this.modals[i] = false
      }
    }
  }

  closeModal(item){
    this.modals[item] =  false
  }

}
