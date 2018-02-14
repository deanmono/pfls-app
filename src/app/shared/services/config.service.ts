import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ConfigService {

    constructor() { }

    public apiHost = 'http://174.138.51.54/wp-json/';

}
