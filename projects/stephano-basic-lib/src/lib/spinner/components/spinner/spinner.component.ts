import { ChangeDetectionStrategy, Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: 'sbl-spinner',
  template: `
    <ng-template #circle>
      <div class="clip">
        <svg [ngStyle]="{
          width: size,
          height: size,
        }">
          <circle
            [ngStyle]="{
              strokeWidth,
              strokeDasharray,
              stroke: color,
            }"
            cx="50%"
            cy="50%"
            r="40%"
            fill="none"
          ></circle>
        </svg>
      </div>
    </ng-template>
    <div class="first half-area">
      <ng-container *ngTemplateOutlet="circle">
      </ng-container>
    </div>
    <div class="second half-area">
      <ng-container *ngTemplateOutlet="circle">
      </ng-container>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {

  @Input()
  public color = '#3182ce'; // $blue-600
  @HostBinding('style.width.px')
  @HostBinding('style.height.px')
  private _size = 40;
  @Input()
  public set size(size: number) {
    this._size = size;
    this.strokeWidth = this.getStrokeWidth(this.size);
    this.strokeDasharray = this.getStrokeDasharray(this.size);
  };
  public get size(): number {
    return this._size;
  };
  protected strokeWidth = this.getStrokeWidth(this.size);
  protected strokeDasharray = this.getStrokeDasharray(this.size);

  private getStrokeWidth(size: number): number {
    return size * .1;
  }

  private getStrokeDasharray(size: number): number {
    return size * .4 * Math.PI;
  }

}
