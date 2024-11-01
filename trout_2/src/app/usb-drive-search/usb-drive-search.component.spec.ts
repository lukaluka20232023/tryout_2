import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsbDriveSearchComponent } from './usb-drive-search.component';

describe('UsbDriveSearchComponent', () => {
  let component: UsbDriveSearchComponent;
  let fixture: ComponentFixture<UsbDriveSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsbDriveSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsbDriveSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
