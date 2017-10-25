import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ProgramService } from '../program.service';
import { Program } from '../program';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-program-add',
  templateUrl: './program-add.component.html',
  styleUrls: ['./program-add.component.css']
})
export class ProgramAddComponent implements OnInit {
  programForm = new FormGroup ({});

  constructor(private route: ActivatedRoute,
    private programService:ProgramService,
    private location:Location,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
    ) {
      this.createForm();
    }

  createForm(){
    this.programForm = this.formBuilder.group({
      name: '',
      carrierId: '',
      active: '',
      contactInfo: '',
      companyLogo: '',
      companyUrl: '',
      offerEligibilityDays: '',
      contractedOEMs: '',
      insuranceName: '',
      scoreDiscount: '',
      discountType: '',
      eligibleCountries: '',
      eligibleProvinces: '',
      beginDate: '',
      expirationDate: ''
    });
  }

  @Input() program:Program = new Program();
  carrierId:number;
  
  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      if (params.id) {
        console.log('cloning program');

        this.route.paramMap
        .switchMap((params: ParamMap) => this.programService.getProgram(+params.get('id')))
        .subscribe(program => {
          let copy = Object.assign({}, program);
          this.program = copy;
    
          this.programForm = this.formBuilder.group({
            name: program.name + ' Copy',
            carrierId: program.carrierId,
            active: program.active,
            contactInfo: program.contactInfo,
            companyLogo: program.companyLogo,
            companyUrl: program.companyUrl,
            offerEligibilityDays: program.offerEligibilityDays,
            contractedOEMs: program.contractedOEMs,
            insuranceName: program.insuranceName,
            scoreDiscount: program.scoreDiscount,
            discountType: program.discountType,
            eligibleCountries: program.eligibleCountries,
            eligibleProvinces: program.eligibleProvinces,
            beginDate: program.beginDate,
            expirationDate: program.expirationDate
          });
        
        });
  
      } else {
          console.log('carrierId = ' + params.cid);
          this.carrierId = +params.cid;
      }
    });

  }

  goBack(): void{
    this.location.back();
  }

  addProgram(){
    console.log(this.programForm.value);
    console.log(JSON.stringify(this.programForm.value));

    let program = new Program();
    let values = this.programForm.value;
    for(let x in values){
      program[x] = values[x];
    }

    program.active = true;
    program.id = 9;
    if(this.carrierId && this.carrierId>0)
      program.carrierId = this.carrierId;

    let result = this.programService.addProgram(program);
    if(result){
      alert('Program added.');
      this.router.navigate(['/carrier', program.carrierId]);
    }

  }

}
