import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  inject,
} from "@angular/core";
import { Highlightable } from "@angular/cdk/a11y";

@Component({
  selector: 'sbl-dropdown-option',
  template: '{{ display }}',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownOptionComponent implements Highlightable {

  @Input({ required: true })
  public value!: NonNullable<unknown>;
  @Input({ required: true })
  public display!: NonNullable<unknown>;
  public disabled = false;
  @HostBinding('class.empty')
  private _isEmpty = false;
  @Input()
  public set isEmpty(isEmpty: boolean | undefined) {
    this._isEmpty = !!isEmpty;
    this.disabled = this.isEmpty;
  };
  public get isEmpty(): boolean {
    return this._isEmpty;
  };
  @Input()
  @HostBinding('class.chosen')
  public isChosen = false;
  @HostBinding('class.focused')
  public isFocused = false;
  private readonly elRef: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly cd = inject(ChangeDetectorRef);

  public setActiveStyles(): void {
    this.isFocused = true;
    this.cd.markForCheck();
  }

  public setInactiveStyles(): void {
    this.isFocused = false;
    this.cd.markForCheck();
  }

  public scrollIntoView(): void {
    this.elRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    this.cd.markForCheck();
  }

}
