import { Component, OnInit } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/Rx';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent  {
  public navbarCollapsed: boolean;
  public activeModal: NgbActiveModal;

  constructor(
      public modalService: NgbModal,
  ) {
    this.navbarCollapsed = true;
  }
  public openSignUp() {
      this.modalService.open(SignupComponent);
  }


}
