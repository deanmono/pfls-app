import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public token: string;

    constructor(
        public activeModal: NgbActiveModal,
        public auth: AuthService
    ) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    username = '';
    password = '';
    auth_status: string = null;

    newPassword = '';
    confirmNewPassword = '';

    ngOnInit() {

    }

    public getAuthTokenSimple() {
        this.auth.getToken(this.username, this.password).subscribe((resp) => {
            console.log('login', resp);
            this.token = resp;

            const token = resp.token;
            if (token) {
                // set token property
                this.token = token;

                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: this.username, token: token }));

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        });

        this.activeModal.close();
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
