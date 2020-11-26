import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model';

import { ProductService } from '../product-add/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product = {};
  id: number = 0;
  constructor(route: ActivatedRoute, private productService: ProductService) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.productService.getProduct(this.id).subscribe((product: Product) => {
      if (product) {
        this.product = product;
      }
    });
  }
}
