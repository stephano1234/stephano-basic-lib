import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { IModalComponent } from "../modal.component.interface";

@Component({
  selector: 'sbl-failure-modal',
  templateUrl: 'failure-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FailureModalComponent implements IModalComponent {

  @Input()
  public title = 'Failure!';

  @Input()
  public message = '';

  @Output()
  public onClickOK = new EventEmitter<void>();

}
