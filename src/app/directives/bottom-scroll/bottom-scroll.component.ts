import { Component } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: 'sbld-bottom-scroll',
  templateUrl: './bottom-scroll.component.html',
  styleUrls: ['./bottom-scroll.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class BottomScrollComponent {

  protected readonly code = `<div
  class="any-scrollable-container"
  sblBottomScroll
  [triggeringThresholdRatio]="0.85"
  (bottomScrollEvent)="showAlert()"
>
  <span *ngFor="let item of items">{{ item }}</span>
</div>`;
  protected items = Array.from({ length: 100 }).map((_, i) => `Item: ${i + 1}`);

  protected showAlert(): void {
    alert('The bottom scroll event has been triggered!');
  }

}
