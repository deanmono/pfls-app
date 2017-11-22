import { Injectable } from '@angular/core';
import { Policy } from './policy';
import { Observable } from "rxjs/Rx";

@Injectable()
export class PoliciesService {

  constructor() { }

  getPolicies():Observable<Policy[]>{
    let policies = [];
    policies.push(new Policy());
    policies[0].id = 1;
    policies[0].name = 'Policy One';

    policies.push(new Policy());
    policies[1].id = 2;
    policies[1].name = 'Policy Two';

    policies.push(new Policy());
    policies[2].id = 3;
    policies[2].name = 'Policy Three';

    return Observable.of(policies);
  }

}
