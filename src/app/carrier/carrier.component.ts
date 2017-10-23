import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { CarrierService } from './carrier.service';
import { ProgramService } from './program/program.service';

import { Carrier } from './carrier';
import { Program } from './program/program';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.css']
})
export class CarrierComponent implements OnInit {

  constructor(private carrierService:CarrierService,
              private programService:ProgramService,
              private route: ActivatedRoute,
              private router: Router) { }

  @Input() carrier: Carrier = new Carrier();

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.carrierService.getCarrier(+params.get('id')))
      .subscribe(carrier => this.carrier = carrier);
  }

  onSelect(program:Program){
    console.log('program.id = ' + program.id);
    this.router.navigate(['/carrier/program', program.id]);
  }

}
