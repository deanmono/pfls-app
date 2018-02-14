import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { ConfigService } from "./config.service";

@Injectable()
export class ProductsService {

    constructor(
        private http: HttpClient,
        private config: ConfigService
    ) { }

    getProducts(): Observable<any> {
        // Initialize Params Object
        return this.http.get(this.config.apiHost + 'wp/v2/products');
    }
}
