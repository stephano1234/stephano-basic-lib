import { Component } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: 'sbld-get-property',
  templateUrl: './get-property.component.html',
  styleUrls: ['./get-property.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class GetPropertyComponent {

  protected readonly code = `{ bag: { money: 20, foods: ['sandwich', 'grapes', 'nuts'] } } | getProperty:'bag.foods.2'`;
  protected value = {
    bag: {
      money: 20,
      foods: [
        'sandwich',
        'grapes',
        'nuts'
      ]
    }
  };

}
