import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model';
import { ProductService } from '../product-add/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  constructor(private productService: ProductService) {}

  getListProduct = () => {
    this.productService.getListProduct().subscribe((productList: Product[]) => {
      console.log('getListProduct', typeof productList[0].image);
      this.productList = productList;
    });
  };

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getListProduct();
  }
}
