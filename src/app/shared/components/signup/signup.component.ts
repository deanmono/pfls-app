import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { BackandService } from '@backand/angular2-sdk';
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
        private backand: BackandService,
        public activeModal: NgbActiveModal
    ) {}

    public signUp() {
        if (this.signUpPassword !== this.confirmPassword) {
            alert('Passwords should match');
            return;
        }

        this.backand.signup(this.firstName, this.lastName, this.email, this.signUpPassword, this.confirmPassword)
            .then((data: any) => {
                    this.email = this.signUpPassword = this.confirmPassword = this.firstName = this.lastName = '';
                    this.activeModal.close('Close click')
                    console.log(data);
                },
                (err: any) => {
                    console.error(err);
                }
            );
    }

    // public socialSignup(provider) {
    //   this.backand.socialSignup(provider)
    //     .then((data: any) => {
    //           console.log('Sign up succeeded with:' + provider);
    //     },
    //     (err: any) => {
    //           console.log(err)
    //     }
    //   );
    // }
    // public inAppSocial(provider) {
    //   var $obs = backand.service.inAppSocial(provider);
    //   $obs.subscribe(
    //       data => {
    //           console.log('Sign up succeeded with:' + provider);
    //       },
    //       err => {
    //           backand.service.logError(err)
    //       },
    //       () => console.log('Finish Auth'));
    // }
}
