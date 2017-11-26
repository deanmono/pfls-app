import { Component, OnInit } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  res: string;
  public navbarCollapsed = true;
  constructor(private backandService: BackandService) {}

  getList(): void {
      this.res = 'fetching objects...';
      this.backandService.object.getList('users').then((res: any) => {
          this.res = `${res.data.length} objects fetched`;
          console.log(res);
      });
  }
  ngOnInit(): void {
      this.backandService.init({
          appName: 'eratos',
          anonymousToken: '9958966c-89bb-4e49-a44a-69446de222c1',
          signUpToken: '578837f8-e316-4624-8fd5-0d524a1838a4'
      });
      this.getList();
  }


}
