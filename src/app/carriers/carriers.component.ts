import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {CarriersService} from './carriers.service';
import {Carrier} from '../carrier/carrier';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.css']
})
export class CarriersComponent implements OnInit {

  constructor(private carriersService: CarriersService, private router: Router) { }

  carriers: Observable<Carrier[]>;

  ngOnInit() {
    this.carriers = this.carriersService.getCarriers();
  }

  onSelect(carrier:Carrier): void{
    console.log('carrier.id = '+carrier.id);
    this.router.navigate(['/carrier', carrier.id]);
  }

}
