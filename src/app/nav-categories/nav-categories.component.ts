import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.css']
})
export class NavCategoriesComponent implements OnInit {

  categories:any;
  item_images:any=["https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
  "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
  "https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/gabrielle-chanel-essence-eau-de-parfum-spray-3-4fl-oz--packshot-default-120630-9518175879198.jpg",
  "https://media.istockphoto.com/id/1249579132/photo/beauty-products-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lDmUkhu7XDdGww_AsQub6jJ55I7WMgAoYrqdopFa-tI=",
  "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
  "https://img.freepik.com/free-vector/realistic-icon-with-suspended-metal-chandelier-loft-style-with-three-light-bulbs-vector-illustration_1284-66944.jpg?w=740&t=st=1670232487~exp=1670233087~hmac=85d108b0fe142a6b3a19a6e0928854c055f75d04182f8b9aa51c1dbdf671da59",
  "https://img.freepik.com/free-vector/chair-realistic-illustration_1284-9507.jpg?w=740&t=st=1670232506~exp=1670233106~hmac=488db357e37c78c572893559e94dd04f2e1c6973f4117f22b11eced413b7383a",
  "https://m.media-amazon.com/images/I/81w5sAvmXCL._UX569_.jpg",
  "https://img.freepik.com/free-vector/fashion-illustration-hand-drawn-design_52683-17729.jpg?w=740&t=st=1670232719~exp=1670233319~hmac=9e5b7600a700b1537626105186f3fdc3d0e48b8a2bd898a54efd74a2b6a41863",
  "https://img.freepik.com/free-vector/unisex-sport-training-running-shoe-isolated-realistic-side-view-vertically-positioned-green-trendy-sneaker_1284-31656.jpg?w=740&t=st=1670232814~exp=1670233414~hmac=48e11749b469bccd7136316a050879da5771a2c8d087b7c49a7e05ea3df587f1"

]
  
  constructor() { }

  ngOnInit(): void {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(j => {
      this.categories=j.slice(0, 10);
    });
  }


  getCategory(item:any){
    console.log(item)
  }


}
