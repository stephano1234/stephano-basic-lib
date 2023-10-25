import { Component } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: 'sbld-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class IconComponent {

  protected readonly code = `<sbl-icon
  icon="search"
  style="font-size: 20px; color: black;"
></sbl-icon>`;

}
