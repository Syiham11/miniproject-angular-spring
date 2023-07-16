import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  productId!: string;
  currentProduct: Product;

  constructor(private route: ActivatedRoute) {
    this.currentProduct = JSON.parse(localStorage.getItem("currentProduct") || '{}');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        this.productId = params.get('id') || '';
      }
    });
  }

}
