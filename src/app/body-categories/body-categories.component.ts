import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-body-categories',
  templateUrl: './body-categories.component.html',
  styleUrls: ['./body-categories.component.css']
})
export class BodyCategoriesComponent implements OnInit {

  constructor() { }

  productCategories = [
    {categoryTitle: "electronics",
     products:[
      {
        productTitle:'Printer',
        imgSrc:'https://rukminim1.flixcart.com/image/500/500/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70',
        price:'From ₹3,999',
        brand:'HP'
      },
      {
        productTitle:'Camera',
        imgSrc:'https://rukminim1.flixcart.com/image/500/500/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70',
        price:'Shop Now!',
        brand:'Canon, Sony'
      },
      {
        productTitle:'Gimbal',
        imgSrc:'https://rukminim1.flixcart.com/image/500/500/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70',
        price:'Shop Now!',
        brand:'Canon, Sony'
      },
      {
        productTitle:'Hair Dryer',
        imgSrc:'https://rukminim1.flixcart.com/image/500/500/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70',
        price:'Shop Now!',
        brand:'Philips'
      },
      {
        productTitle:'Monitors',
        imgSrc:'https://rukminim1.flixcart.com/image/500/500/kfmv9u80/monitor/9/n/v/ha220q-um-ww0si-a01-acer-original-imafwfjq3gzgjvz5.jpeg?q=70',
        price:'Shop Now!',
        brand:'Samsung'
      },
      {
        productTitle:'Projectors',
        imgSrc:'https://rukminim1.flixcart.com/image/612/612/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70',
        price:'Shop Now!',
        brand:'Pixa12'
      },
    ]},

  ];

  ngOnInit(): void {
  }
  
  viewAll(item:any){
    console.log(item)
  }

}
