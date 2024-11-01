import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsbDriveInventoryService } from '../shared/services/usb-drive-inventory.service';
import { UsbDrive } from '../shared/modules/usb-drive';

@Component({
  selector: 'app-usb-drive-search',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './usb-drive-search.component.html',
  styleUrl: './usb-drive-search.component.css',
})
export class UsbDriveSearchComponent implements OnInit {
  usbDrives: UsbDrive[] = [];

  searchForm = new FormGroup({
    model: new FormControl(),
    priceFrom: new FormControl(),
    priceTo: new FormControl(),
  });

  OnSearch() {
    let value = this.searchForm.value;

    this.usbDrives = this.usbDriveInventoryService.filterItems({
      model: value.model,
      priceFrom: value.priceFrom,
      priceTo: value.priceTo,
    });
  }

  OnReset() {
    this.searchForm.reset();
    this.usbDrives = this.usbDriveInventoryService.getItems();
  }

  constructor(private usbDriveInventoryService: UsbDriveInventoryService) {}

  ngOnInit(): void {
    this.usbDrives = this.usbDriveInventoryService.getItems();
  }
}
