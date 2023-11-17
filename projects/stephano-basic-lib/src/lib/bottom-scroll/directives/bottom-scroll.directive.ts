import { CdkScrollable } from "@angular/cdk/scrolling";
import { Directive, EventEmitter, Input, OnDestroy, Output, inject } from "@angular/core";
import { map, pairwise, filter, tap } from "rxjs";

const DEFAULT_THRESHOLD = .8;

@Directive({
  selector: '[sblBottomScroll]',
  hostDirectives: [CdkScrollable],
})
export class BottomScrollDirective implements OnDestroy {

  @Input({
    transform: (triggeringThresholdRatio: number): number => {
      if (triggeringThresholdRatio < 0 || triggeringThresholdRatio > 1) {
        console.warn(`
  Directive: BottomScrollDirective

  The variable triggeringThresholdRatio must be a number between 0 and 1.
  0.8 for variable triggeringThresholdRatio is being applied.
        `);
        return DEFAULT_THRESHOLD;
      }
      return triggeringThresholdRatio;
    },
  })
  public triggeringThresholdRatio = DEFAULT_THRESHOLD;
  @Output()
  public readonly bottomScrollEvent = new EventEmitter<void>();

  private readonly cdkScrollable = inject(CdkScrollable, { self: true });
  private readonly scrollSub = this.cdkScrollable.elementScrolled().pipe(
    map(() => this.cdkScrollable.measureScrollOffset('bottom')),
    pairwise(),
    filter(([last, current]) => current < last),
    map(([_, current]) => current),
    map(distanceFromBottom => {
      const maxHeight = this.cdkScrollable.getElementRef().nativeElement.clientHeight;
      const scrollHeight = this.cdkScrollable.getElementRef().nativeElement.scrollHeight;
      return distanceFromBottom / (scrollHeight - maxHeight);
    }),
    filter(percentageFromBottom => percentageFromBottom < (1 - this.triggeringThresholdRatio)),
    tap(() => this.bottomScrollEvent.emit()),
  ).subscribe();

  public ngOnDestroy(): void {
    this.scrollSub.unsubscribe();
  }

}
