import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner=[
    "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/ac74e75e9c5d330b.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/3a35067946960605.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/496676450a05f0fb.jpg?q=50"
  ]

}
