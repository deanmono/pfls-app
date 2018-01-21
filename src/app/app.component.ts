import { Component, OnInit } from '@angular/core';
import { HttpService } from "./shared/services/http.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    res: string;
    public navbarCollapsed = true;
    constructor(
      private httpService: HttpService,
      private router: Router
    ) {}

    getList(): void {
      this.res = 'fetching objects...';
    }
    ngOnInit(): void {

      // this.getList();
    }

    signOut() {

    }

}
