import { EventEmitter } from "@angular/core";

export interface IModalComponent {

  title: string;
  message: string;
  onClickOK: EventEmitter<void>;

}
