import { Component, inject } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ModalService } from "stephano-basic-lib";

@Component({
  selector: 'sbld-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class ModalComponent {

  private readonly modalService = inject(ModalService);
  protected readonly code = `import { ModalService } from "stephano-basic-lib";

modalService = inject(ModalService);

onClickSuccess(): void {
  this.modalService.openSuccessModal('Some success message. Some success message.', 'Some Success Title');
}

onClickFailure(): void {
  this.modalService.openFailureModal('Some failure message. Some failure message.', 'Some Failure Title');
}`;

  protected onClickSuccess(): void {
    this.modalService.openSuccessModal('Some success message. Some success message.', 'Some Success Title');
  }

  protected onClickFailure(): void {
    this.modalService.openFailureModal('Some failure message. Some failure message.', 'Some Failure Title');
  }

}
