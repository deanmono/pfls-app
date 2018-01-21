import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(
        public activeModal: NgbActiveModal
    ) {}

    username: string = '';
    password: string = '';
    auth_type: string = "N/A";
    is_auth_error: boolean = false;
    auth_status: string = null;
    loggedInUser: string = '';


    oldPassword: string = '';
    newPassword: string = '';
    confirmNewPassword: string = '';

    ngOnInit() {

    }

    public getAuthTokenSimple() {
        this.auth_type = 'Token';
    }


    public signOut() {
        this.auth_status = null;
    }

    public changePassword() {
        if (this.newPassword !== this.confirmNewPassword) {
            alert('Passwords should match');
            return;
        }
    }

}
