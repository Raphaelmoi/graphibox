import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imageUrls: string[] = [
    "./assets/img/slide/graphibox_SLIDE1.jpg",
    "./assets/img/slide/graphibox_SLIDE2.jpg",
    "./assets/img/slide/graphibox_SLIDE3.jpg",
  ];
  constructor() { }

  ngOnInit() {
  }

}
