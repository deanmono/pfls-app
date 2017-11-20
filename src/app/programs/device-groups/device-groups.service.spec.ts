import { TestBed, inject } from '@angular/core/testing';

import { DeviceGroupsService } from './device-groups.service';

describe('DeviceGroupsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceGroupsService]
    });
  });

  it('should be created', inject([DeviceGroupsService], (service: DeviceGroupsService) => {
    expect(service).toBeTruthy();
  }));
});
