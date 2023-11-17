import { FailureModalComponent } from "./components/failure-modal/failure-modal.component";
import { SuccessModalComponent } from "./components/success-modal/success-modal.component";

export const modal = [
  SuccessModalComponent,
  FailureModalComponent,
];

// Components
export * from './components/success-modal/success-modal.component';
export * from './components/failure-modal/failure-modal.component';
// Services
export * from './services/modal.service';
