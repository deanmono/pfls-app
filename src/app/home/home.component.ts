import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ProductsService } from "../shared/services/products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: any;

  constructor(
      private productsService: ProductsService
  ) {


    this.productsService.getProducts().subscribe((resp) => {
      this.products = resp;
    });
  }

  ngOnInit() {

  }


}
