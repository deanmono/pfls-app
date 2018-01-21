import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductsService {

    constructor(
        private http: HttpClient
    ) { }

    getProducts(): Observable<any> {
        // Initialize Params Object
        return this.http.get('http://174.138.51.54/wp-json/wp/v2/products');
    }

    getProduct(fromSymbol, toSymbol, exchanges): Observable<any> {
        let Params = new HttpParams();

        // Begin assigning parameters
        Params = Params.append('fsyms', fromSymbol);
        Params = Params.append('tsyms',  toSymbol);
        Params = Params.append('e',  exchanges);
        // Params = Params.append('tryConversion',  false);

        // try https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC&e=Binance if just getting price instead of object
        return this.http.get('https://min-api.cryptocompare.com/data/pricemultifull', { params: Params });
    }
}
