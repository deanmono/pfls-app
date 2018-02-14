import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { ConfigService } from "./config.service";

@Injectable()
export class AuthService {
    public token: string;

    constructor(
        private http: HttpClient,
        private config: ConfigService
    ) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    getToken(username, password): Observable<any> {
        let Params = new HttpParams();

        // Begin assigning parameters
        Params = Params.append('username', username);
        Params = Params.append('password',  password);

        console.log('params', Params);

        // return this.http.post(this.config.apiHost + 'jwt-auth/v1/token', { params: Params });

        return this.http.post(this.config.apiHost + 'jwt-auth/v1/token', {username: username, password: password});

    }

    get(): Observable<any> {
        // Initialize Params Object
        return this.http.get(this.config.apiHost);
    }

}
