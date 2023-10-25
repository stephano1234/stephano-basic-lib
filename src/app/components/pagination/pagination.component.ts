import { Component } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { Pagination } from "stephano-basic-lib";

@Component({
  selector: 'sbld-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class PaginationComponent {

  protected readonly code = `<sbl-pagination
  [total]="20"
  (paginationChange)="value = $event"
></sbl-pagination>`;
  protected value: Pagination | null = null;

}
