import { GlobalPositionStrategy, Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable, Type, inject } from "@angular/core";
import { SuccessModalComponent } from "../components/success-modal/success-modal.component";
import { take } from "rxjs";
import { IModalComponent } from "../components/modal.component.interface";
import { FailureModalComponent } from "../../stephano-basic-lib.module";

@Injectable({ providedIn: 'root' })
export class ModalService {

  private readonly overlay = inject(Overlay);

  public openSuccessModal(message: string, title?: string): void {
    this.openModal(SuccessModalComponent, title, message);
  }

  public openFailureModal(message: string, title?: string): void {
    this.openModal(FailureModalComponent, title, message);
  }

  private openModal(component: Type<IModalComponent>, title: string | undefined, message: string) {
    const overlayRef = this.overlay.create({
      positionStrategy: new GlobalPositionStrategy().centerHorizontally().centerVertically(),
      hasBackdrop: true,
    });
    const componentPortal = new ComponentPortal(component);
    const componentRef = overlayRef.attach(componentPortal);
    title && (componentRef.instance.title = title);
    componentRef.instance.message = message;
    const closeSubjectSub = componentRef.instance.onClickOK.pipe(take(1)).subscribe(() => {
      overlayRef.dispose();
      closeSubjectSub.unsubscribe();
    });
    const backdropClickSub = overlayRef.backdropClick().pipe(take(1)).subscribe(() => {
      overlayRef.dispose();
      backdropClickSub.unsubscribe();
    });
  }

}
