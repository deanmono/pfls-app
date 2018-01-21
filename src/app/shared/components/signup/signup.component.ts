import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    email = '';
    firstName = '';
    lastName = '';
    signUpPassword = '';
    confirmPassword= '';

    ngOnInit() {
    }

    constructor(
        public activeModal: NgbActiveModal
    ) {}

    public signUp() {
        if (this.signUpPassword !== this.confirmPassword) {
            alert('Passwords should match');
            return;
        }
    }

}
