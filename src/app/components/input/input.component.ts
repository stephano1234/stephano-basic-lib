import { Component } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: 'sbld-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class InputComponent {

  protected readonly code = `<sbl-input>
  <input
    sblInput
    [(ngModel)]="value"
    required
  >
</sbl-input>`;
  protected value = null;

}
