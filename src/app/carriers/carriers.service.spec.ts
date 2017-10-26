import { TestBed, inject } from '@angular/core/testing';

import { CarriersService } from './carriers.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
  ResponseOptions,
  Response,
  Http,
  BaseRequestOptions,
  RequestMethod
} from '@angular/http';

const mockHttpProvider = {
  deps: [ MockBackend, BaseRequestOptions ],
  useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
  }
};

describe('CarriersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarriersService,
                  { provide: Http, useValue: mockHttpProvider },
                  MockBackend,
                  BaseRequestOptions]
    });
  });

  it('should be created', inject([CarriersService], (service: CarriersService) => {
    expect(service).toBeTruthy();
  }));
});
