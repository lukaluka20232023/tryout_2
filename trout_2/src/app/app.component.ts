import { Component } from '@angular/core';
import { UsbDriveSearchComponent } from "./usb-drive-search/usb-drive-search.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsbDriveSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trout_2';
}
