import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { IModalComponent } from "../modal.component.interface";

@Component({
  selector: 'sbl-success-modal',
  templateUrl: 'success-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessModalComponent implements IModalComponent {

  @Input()
  public title = 'Success!';

  @Input()
  public message = '';

  @Output()
  public onClickOK = new EventEmitter<void>();

}
