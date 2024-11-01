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
    let result = [...this.usbDrives];

    if (filter.model !== null && filter.model !== undefined) {
      result = result.filter((c) => c.modelName.includes(filter.model!));
    }
    if (filter.priceFrom !== null && filter.priceFrom !== undefined) {
      result = result.filter((c) => c.price >= filter.priceFrom!);
    }
    if (filter.priceTo !== null && filter.priceTo !== undefined) {
      result = result.filter((c) => c.price <= filter.priceTo!);
    }

    return result;
  }

  constructor() {
    this.usbDrives = [
      {
        id: 'df97744b-7d02-4cfc-b4da-8b1ccb9c2d21',
        modelName: 'Samsung',
        price: 100,
        isAvailable: true,
      },
      {
        id: 'f828752d-3919-4ff9-9a95-b52813144318',
        modelName: 'Apple',
        price: 150,
        isAvailable: true,
      },
      {
        id: '004782d0-81f5-49aa-9a06-53f5a583793d',
        modelName: 'Nokia',
        price: 50,
        isAvailable: false,
      },
    ];
  }
}
