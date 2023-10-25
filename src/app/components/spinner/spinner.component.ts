import { Component } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: 'sbld-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class SpinnerComponent {

  protected readonly code = `<sbl-spinner></sbl-spinner>`;

}
