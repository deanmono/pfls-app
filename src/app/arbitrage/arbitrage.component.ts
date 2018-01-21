import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { HttpService } from "../shared/services/http.service";

@Component({
  selector: 'app-arbitrage',
  templateUrl: './arbitrage.component.html',
  styleUrls: ['./arbitrage.component.css']
})
export class ArbitrageComponent implements OnInit {

  private exchangesList: any;
  private exchanges: any;
  public exchange: any;
  public exchangeSelected: any;
  public toCoins: any;
  public text: any;
  public toCoin: string;
  public fromCoin: string;
  private coinExchangeOutput;

  constructor(private httpService: HttpService) {
      this.exchangesList = [];
      this.exchangeSelected = [];

      this.httpService.getExchanges().subscribe((data) => {
          this.exchanges = data;
          console.log('data', data);
          for (const exchangeFromList in data) {
              this.exchangesList.push(exchangeFromList);
          }
          this.exchangesList.sort();
      });
  }

  ngOnInit() {

  }

  initExchanges() {
      this.httpService.getExchanges().subscribe((data) => {
          this.exchanges = data;
          console.log('data', data);
          for (const exchangeFromList in data) {
              this.exchangesList.push(exchangeFromList);
          }
          this.exchangesList.sort();
      });
  }

  selectedExchange(exchange) {
      this.exchangeSelected = [];
      this.fromCoin = '';
      if (this.exchanges[exchange]) {
          for (const x in this.exchanges[exchange]) {
              this.exchangeSelected.push(x);
          }
          this.exchangeSelected.sort();
          // this.exchangeSelected = this.exchanges[exchange];
          console.log('exchage selected', this.exchangeSelected );
      }
  }

  selectedFromCoin(fromCoin) {
      this.toCoins = [];
      this.toCoin = '';
      if (this.exchanges[this.exchange]) {
          this.toCoins = this.exchanges[this.exchange][fromCoin];
          this.toCoins.sort();
      }
  }

  selectedToCoin(toCoin) {
      this.priceFromExchange();
  }

  priceFromExchange() {
      this.httpService.getPriceFromExchange(this.fromCoin, this.toCoin, this.exchange).subscribe((data) => {
          this.coinExchangeOutput = data.RAW[this.fromCoin][this.toCoin];
          console.log('data RAW', this.coinExchangeOutput);
      });
  }

}
