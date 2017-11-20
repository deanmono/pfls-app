import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({});

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
                   email: new FormControl('', [ Validators.required, Validators.email ]),
                   password: new FormControl('', [ Validators.minLength(5)])
       });
    }
    get email() { return this.loginForm.get('email'); }
    get password() { return this.loginForm.get('password'); }


    login() {
    }

    cancel () {
        console.log('Hey im cancelling now, this should eventually use a shared goBack function once a BaseController is factored out  ');
    }
}
