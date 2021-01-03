import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from 'src/app/modals/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  products: Product[];
  public banners = [];
  public slides = [
    { title: 'GANA AHORA', subtitle: 'No te lo pierdas!', image: 'assets/images/carousel/banner2.jpg', btnText: 'APUESTA YA' },
    { title: 'LA MEJOR FORMA DE GANAR', subtitle: 'Aprovecha!', image: 'assets/images/carousel/banner3.jpg', btnText: 'JUEGA AHORA' },

  ];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getBanners()
    .subscribe(
      data => this.banners = data
    );

 this.productService.getProducts()
 .subscribe(
   (product: Product[]) => {
     this.products = product
   }
 )

  }






}
