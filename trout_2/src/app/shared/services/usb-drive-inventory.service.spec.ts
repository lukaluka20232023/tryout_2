import { TestBed } from '@angular/core/testing';

import { UsbDriveInventoryService } from './usb-drive-inventory.service';

describe('UsbDriveInventoryService', () => {
  let service: UsbDriveInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsbDriveInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
