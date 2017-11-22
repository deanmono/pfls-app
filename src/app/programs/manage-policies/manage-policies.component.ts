import { Component, OnInit } from '@angular/core';
import { PoliciesService } from './policies.service';
import { Policy } from './policy';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-manage-policies',
  templateUrl: './manage-policies.component.html',
  styleUrls: ['./manage-policies.component.css']
})
export class ManagePoliciesComponent implements OnInit {

  constructor(private policiesService:PoliciesService) { }

  policies:Observable<Policy[]>;

  ngOnInit() {
    this.policies = this.policiesService.getPolicies();
  }

}
