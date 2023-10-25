import { Component } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: 'sbld-allowed-pattern',
  templateUrl: './allowed-pattern.component.html',
  styleUrls: ['./allowed-pattern.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class AllowedPatternComponent {

  protected readonly code = `<sbl-input>
  <input
    sblInput
    allowedPattern="[0-9]"
    [(ngModel)]="value"
    required
  >
</sbl-input>`;
  protected value: string | null = null;

}
