import { Component } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: 'sbld-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss'],
  standalone: true,
  imports: [
    SharedModule,
  ]
})
export class MaskComponent {

  protected readonly code = `<sbl-input>
  <input
    sblInput
    mask="(  ) / /  .  -  "
    [(ngModel)]="value"
    required>
</sbl-input>`;
  protected value: string | null = null;

}
