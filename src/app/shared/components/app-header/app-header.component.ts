import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/Rx';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit  {
  public navbarCollapsed: boolean;
  public activeModal: NgbActiveModal;
  public auth_status: any = false;


  constructor(
      public modalService: NgbModal
  ) {
    this.navbarCollapsed = true;

  }

  ngOnInit() {

  }

  public openSignUp() {
      this.modalService.open(SignupComponent);
  }

  public openLogin() {
      const modalRef = this.modalService.open(LoginComponent);
      modalRef.result.then((userResponse) => {
          if (userResponse) {
              this.auth_status = true;
          }
      });
  }

  public signOut() {
      this.auth_status = null;
  }

}
