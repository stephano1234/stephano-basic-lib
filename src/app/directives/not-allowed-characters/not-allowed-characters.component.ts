import { Component } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: 'sbld-not-allowed-characters',
  templateUrl: './not-allowed-characters.component.html',
  styleUrls: ['./not-allowed-characters.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class NotAllowedCharactersComponent {

  protected readonly code = `<sbl-input>
  <input
    sblInput
    notAllowedCharacters="aeiou0123456789"
    [(ngModel)]="value"
    required
  >
</sbl-input>`;
  protected value: string | null = null;

}
