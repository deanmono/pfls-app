import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpService {

    constructor(
        private http: HttpClient
    ) { }
    /*
    Get Coin Price from exchange (or comma delimited list - e=Binance,Coinbase,Kraken):
    https://min-api.cryptocompare.com/data/generateAvg?fsym=XRP&tsym=BTC&e=Binance

    Get FSYM, and list of TSYM for FSYM from: https://min-api.cryptocompare.com/data/all/exchanges
     */

    getExchanges(): Observable<any> {
        // Initialize Params Object
        return this.http.get('https://min-api.cryptocompare.com/data/all/exchanges');
    }

    getPriceFromExchange(fromSymbol, toSymbol, exchanges): Observable<any> {
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
