import { Injectable } from '@angular/core';
import { UsbDrive } from '../modules/usb-drive';
import { v4 as uuid } from 'uuid';
import { ItemFilter } from '../modules/usb-drive-filter';

@Injectable({
  providedIn: 'root',
})
export class UsbDriveInventoryService {
  usbDrives: UsbDrive[] = [];

  getItems() {
    return this.usbDrives;
  }

  addItem(item: UsbDrive) {
    item.id = uuid();
    this.usbDrives.push(item);

    return item.id;
  }

  filterItems(filter: ItemFilter) {
    let result = [... this.usbDrives];

    if(filter.model !== null && filter.model !== undefined){
      result = result.filter(c => c.modelName.includes(filter.model));
    }
    if (filter.priceFrom !== null && filter.priceFrom !== undefined) {
      result = result.filter((c) => c.price >= filter.priceFrom);
    }
    if (filter.priceTo !== null && filter.priceTo !== undefined) {
      result = result.filter((c) => c.price <= filter.priceTo);
    }
    
    return result;
  }

  constructor(private usbDriveInventoryService: UsbDriveInventoryService) {}
}
