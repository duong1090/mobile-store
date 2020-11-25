import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [
    {
      id: '1',
      name: 'IPHONE 11 PRO',
      description:
        'Điện thoại iPhone X 64GB chính hãng là smartphone giá rẻ, có trả góp. Giao hàng miễn phí trong 1 giờ, 1 đổi 1 tháng đầu nếu lỗi. MUA NGAY!',
      url:
        'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png',
      amount: '100',
      price: '10,000',
    },
    {
      id: '2',
      name: 'IPHONE 11 PRO',
      description:
        'Điện thoại iPhone X 64GB chính hãng là smartphone giá rẻ, có trả góp. Giao hàng miễn phí trong 1 giờ, 1 đổi 1 tháng đầu nếu lỗi. MUA NGAY!',
      url:
        'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png',
      amount: '100',
      price: '10,000',
    },

    {
      id: '3',
      name: 'IPHONE 11 PRO',
      description:
        'Điện thoại iPhone X 64GB chính hãng là smartphone giá rẻ, có trả góp. Giao hàng miễn phí trong 1 giờ, 1 đổi 1 tháng đầu nếu lỗi. MUA NGAY!',
      url:
        'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png',
      amount: '100',
      price: '10,000',
    },
    {
      id: '3',
      name: 'IPHONE 11 PRO',
      description:
        'Điện thoại iPhone X 64GB chính hãng là smartphone giá rẻ, có trả góp. Giao hàng miễn phí trong 1 giờ, 1 đổi 1 tháng đầu nếu lỗi. MUA NGAY!',
      url:
        'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png',
      amount: '100',
      price: '10,000',
    },
    {
      id: '3',
      name: 'IPHONE 11 PRO',
      description:
        'Điện thoại iPhone X 64GB chính hãng là smartphone giá rẻ, có trả góp. Giao hàng miễn phí trong 1 giờ, 1 đổi 1 tháng đầu nếu lỗi. MUA NGAY!',
      url:
        'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png',
      amount: '100',
      price: '10,000',
    },
    {
      id: '3',
      name: 'IPHONE 11 PRO',
      description:
        'Điện thoại iPhone X 64GB chính hãng là smartphone giá rẻ, có trả góp. Giao hàng miễn phí trong 1 giờ, 1 đổi 1 tháng đầu nếu lỗi. MUA NGAY!',
      url:
        'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png',
      amount: '100',
      price: '10,000',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
