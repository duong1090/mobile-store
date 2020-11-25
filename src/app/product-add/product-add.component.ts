import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  product = {
    name: '',
    price: '',
    amount: '',
    description: '',
    manufacturer: '',
    category: '',
    status: '',
    image: ''
  };
  submitted = false;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
      name: this.product.name,
      price: this.product.price,
      amount: this.product.amount,
      description: this.product.description,
      manufacturer: this.product.manufacturer,
      category: this.product.category,
      status: this.product.status,
      image: this.product.image
    };
    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      price: '',
      amount: '',
      description: '',
      manufacturer: '',
      category: '',
      status: '',
      image: ''
    };
  }


}
