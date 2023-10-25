import {
  AfterViewInit,
  ChangeDetectorRef,
  ContentChildren,
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  Output,
  QueryList,
  inject,
} from "@angular/core";
import { ActiveDescendantKeyManager } from "@angular/cdk/a11y";
import { Subscription, tap } from "rxjs";
import { DropdownOptionComponent } from "../components/dropdown-option/dropdown-option.component";
import { DropdownData, EMPTY_DROPDOWN_DATA } from "../models/dropdown.model";

@Directive({
  selector: '[sblDropdownContainer]',
  exportAs: 'sblDropdownContainer',
})
export class DropdownContainerDirective implements AfterViewInit, OnDestroy {

  @Input({ required: true })
  public data!: DropdownData[];
  @Input()
  public chosenData!: NonNullable<unknown> | null;
  @Output()
  public readonly optionClick = new EventEmitter<DropdownData>();
  @Output()
  public readonly emptyContainerClick = new EventEmitter<void>();
  @HostBinding('style.z-index')
  public zIndex = 1000;
  @ContentChildren(DropdownOptionComponent)
  public options!: QueryList<DropdownOptionComponent>;
  public listKeyManager!: ActiveDescendantKeyManager<DropdownOptionComponent>;
  private listKeyManagerChangeSub!: Subscription;
  public readonly cd = inject(ChangeDetectorRef);

  public ngAfterViewInit(): void {
    // TODO: check null options list
    this.listKeyManager = new ActiveDescendantKeyManager(this.options);
    this.listKeyManagerChangeSub = this.listKeyManager.change.pipe(
      tap(activeIndex => this.options.get(activeIndex)?.scrollIntoView()),
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this.listKeyManagerChangeSub.unsubscribe();
  }

  @HostListener('click')
  public onClick(): void {
    this.data.includes(EMPTY_DROPDOWN_DATA) && this.emptyContainerClick.emit();
  }

  public onOptionClick(chosenData: DropdownData, index: number): void {
    this.listKeyManager.setActiveItem(index);
    this.optionClick.emit(chosenData);
  }

  public trackDataByValue(_: number, chosenData: DropdownData): unknown {
    return chosenData.value;
  }

}
