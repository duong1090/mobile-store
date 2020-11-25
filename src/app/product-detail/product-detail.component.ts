import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product = {
    id: '1',
    name: 'IPHONE 11 PRO',
    description:
      'Điện thoại iPhone X 64GB chính hãng là smartphone giá rẻ, có trả góp. Giao hàng miễn phí trong 1 giờ, 1 đổi 1 tháng đầu nếu lỗi. MUA NGAY!',
    url:
      'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png',
    amount: '100',
    price: '10,000',
  };

  constructor() {}

  ngOnInit(): void {}
}
