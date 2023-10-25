import { CdkScrollable } from "@angular/cdk/scrolling";
import { Directive, EventEmitter, Input, OnDestroy, Output, inject } from "@angular/core";
import { map, pairwise, filter, tap } from "rxjs";

const DEFAULT_PERCENTUAL_BOTTOM_SCROLL_DISTANCE_THRESHOLD = .2;

@Directive({
  selector: '[cdkScrollable]'
})
export class ScrollBottomDirective implements OnDestroy {

  @Input({
    transform: (percBottomScrollDistThreshold: number): number => {
      if (percBottomScrollDistThreshold < 0 || percBottomScrollDistThreshold > 1) {
        console.warn(`
  Directive: ScrollBottomDirective

  The variable percBottomScrollDistThreshold must be a number between 0 and 1.
  Number 0 for variable percBottomScrollDistThreshold is being applied.
        `);
        return DEFAULT_PERCENTUAL_BOTTOM_SCROLL_DISTANCE_THRESHOLD;
      }
      return percBottomScrollDistThreshold;
    },
  })
  public percBottomScrollDistThreshold = DEFAULT_PERCENTUAL_BOTTOM_SCROLL_DISTANCE_THRESHOLD;
  @Output()
  public readonly bottomScroll = new EventEmitter<void>();

  private readonly cdkScrollable = inject(CdkScrollable, { self: true });
  private readonly scrollSub = this.cdkScrollable.elementScrolled().pipe(
    map(() => this.cdkScrollable.measureScrollOffset('bottom')),
    pairwise(),
    filter(([last, current]) => current < last),
    map(([_, current]) => current),
    map(distanceFromBottom => {
      const maxHeight = this.cdkScrollable.getElementRef().nativeElement.clientHeight;
      return Math.round(distanceFromBottom / maxHeight);
    }),
    filter(percentageFromBottom => percentageFromBottom < this.percBottomScrollDistThreshold),
    tap(() => this.bottomScroll.emit()),
  ).subscribe();

  public ngOnDestroy(): void {
    this.scrollSub.unsubscribe();
  }

}
