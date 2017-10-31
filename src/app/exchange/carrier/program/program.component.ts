import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ProgramService } from './program.service';
import { Program } from './program';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-program',
  templateUrl: 'program.component.html',
  styleUrls: ['program.component.css']
})
export class ProgramComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private programService:ProgramService,
              private location:Location,
              private router: Router,
              private modalService: NgbModal) { }

  @Input() program:Program = new Program();
  message:string = null;

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.programService.getProgram(+params.get('id')))
    .subscribe(program => this.program = program);
  }

  goBack(): void{
    this.location.back();
  }


  showMessage():boolean{
    return (this.message != null);
  }

  getMessage(){
    return this.message;
  }

  clearMessage(){
    this.message = null;
  }


  showDialog:boolean = false;
  showConfirm():boolean{
    return this.showDialog;
  }



  openConfirm(content, program:Program) {
    this.modalService.open(content).result.then((result) => {
      let closeResult = `Closed with: ${result}`;
      console.log(closeResult);

      if(result=='Yes'){
        this.programService.setActiveStatus(program.id, !program.active).then(
          response => {this.message = "Status updated."; this.program.active = false;}
        );
      }

    }, (reason) => {
      let closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(closeResult);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  gotoAdd(program:Program){
    this.router.navigate(['/carrier/programs/clone', program.id]);
  }

}
