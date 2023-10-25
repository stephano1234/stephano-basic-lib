import { Component } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: 'sbld-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class DropdownComponent {

  protected readonly code = `<sbl-dropdown
  [(ngModel)]="value"
  required
  placeholder="Select one..."
  [data]="[
    { basket: { fruit: 'Apple', color: 'red' } },
    { basket: { fruit: 'Blueberry', color: 'blue' } },
    { basket: { fruit: 'Orange', color: 'orange' } },
    { basket: { fruit: 'Lime', color: 'green' } },
    { basket: { fruit: 'Banana', color: 'yellow' } }
  ]"
  valuePropertyPath="basket.color"
  displayPropertyPath="basket.fruit"
></sbl-dropdown>`;
  protected value = '';

}
