import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  inject,
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import {
  BehaviorSubject,
  Subject,
  combineLatestWith,
  exhaustMap,
  filter,
  map,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { DropdownContainerDirective } from '../../directives/dropdown-container.directive';
import { InputComponent } from '../../../input/components/input/input.component';
import { DropdownOptionComponent } from '../dropdown-option/dropdown-option.component';
import { GetPropertyPipe } from '../../../shared/pipes/get-property.pipe';
import { DropdownData, EMPTY_DROPDOWN_DATA } from '../../models/dropdown.model';
import { AutocompleteDirective } from '../../directives/autocomplete.directive';

@Component({
  selector: 'sbl-dropdown',
  templateUrl: './dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    GetPropertyPipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DropdownComponent,
      multi: true,
    },
  ],
  animations: [
    trigger('opened', [
      state('false', style({ transform: 'rotate(0deg)' })),
      state('true', style({ transform: 'rotate(180deg)' })),
      transition('true <=> false', [
        animate('{{ openingDuration }}ms linear'),
      ]),
    ]),
  ],
})
export class DropdownComponent implements ControlValueAccessor, OnInit, OnDestroy {

  @Input()
  public displayError = true;
  @Input()
  public disableClearButton = false;
  @Input()
  public closeOnSelect = true;
  private _chosenDisplay: NonNullable<unknown> | null = null;
  public get chosenDisplay(): NonNullable<unknown> | null {
    return this._chosenDisplay;
  };
  private _chosenValue: NonNullable<unknown> | null = null;
  public get chosenValue(): NonNullable<unknown> | null {
    return this._chosenValue;
  };
  private readonly elRef: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly dataSubject = new BehaviorSubject<NonNullable<unknown>[]>([]);
  public readonly showDataSubject = new BehaviorSubject<void>(void 0);
  public readonly data$ = this.dataSubject.asObservable().pipe(
    tap(data => this.setData(data)),
    combineLatestWith(this.showDataSubject),
    map(() => this.filterFunction ?
      this.dropdownData.filter(this.filterFunction) : this.dropdownData
    ),
    map(data => this.isOpen ? (data.length ? data : [EMPTY_DROPDOWN_DATA]) : []),
    tap(data => {
      if (this.isOpen) {
        let height = data.length * this.itemHeight;
        // border-width: 2px;
        height = height < this.maxHeight ? height + 2 : this.maxHeight;
        this.currentHeight = height;
      }
    }),
    tap(data => setTimeout(() => {
      const activeItemValue = this.dropdownContainer!.listKeyManager.activeItem?.value;
      const index = data.findIndex(d => d.value === activeItemValue);
      this.dropdownContainer!.listKeyManager.setActiveItem(index);
    })),
  );
  private _data: DropdownData[] = [];
  @Input({ required: true })
  public set data(data: NonNullable<unknown>[]) {
    this.dataSubject.next(data);
  };
  public get dropdownData(): DropdownData[] {
    return this._data;
  };
  public filterFunction: ((d: DropdownData) => boolean) | null = null;
  @Input()
  public valuePropertyPath: string | null = null;
  @Input()
  public displayPropertyPath: string | null = null;
  @Input()
  public placeholder = '';
  @Input()
  public maxHeight = 100;
  protected currentHeight = 0;
  @Input()
  public itemHeight = 30;
  @HostBinding('class.bottom-drop')
  protected isBottomDrop = false;
  @HostBinding('class.opening-closing')
  protected isOpeningClosing = false;
  @ViewChild(InputComponent)
  private input!: InputComponent;
  @ViewChild(DropdownContainerDirective)
  private dropdownContainer?: DropdownContainerDirective;
  @ViewChild(CdkVirtualScrollViewport)
  private cdkVirtualScrollViewport!: CdkVirtualScrollViewport;
  public get options(): QueryList<DropdownOptionComponent> | undefined {
    return this.dropdownContainer?.options;
  };
  private _isOpen = false;
  public get isOpen(): boolean {
    return this._isOpen;
  };
  public readonly isOpenSubject = new Subject<boolean>();
  private readonly isOpenSub = this.isOpenSubject.asObservable().pipe(
    filter(isOpen => this.isOpen !== isOpen),
    exhaustMap(isOpen => new BehaviorSubject(isOpen).pipe(
      tap(isOpen => this._isOpen = isOpen),
      tap(() => !this.isOpen && (this.currentHeight = 0)),
      tap(() => this.isOpeningClosing = true),
      tap(() => this.cdkVirtualScrollViewport.appendOnly = this.isOpen),
      tap(() => this.isOpen && (this.isBottomDrop = true)),
      tap(() => !this.isOpen && this.dropdownContainer!.zIndex--),
      tap(() => this.isOpen && this.showDataSubject.next()),
      takeUntil(timer(this.openingDuration).pipe(
        tap(() => this.isOpeningClosing = false),
        tap(() => !this.isOpen && (this.isBottomDrop = false)),
        tap(() => !this.isOpen && this.dropdownContainer!.zIndex++),
        tap(() => !this.isOpen && this.showDataSubject.next()),
        tap(() => queueMicrotask(() => {
          this.dropdownContainer?.cd.markForCheck();
          this.cd.detectChanges();
        })),
      )),
    )),
  ).subscribe();
  private readonly injector = inject(Injector);
  protected control!: NgControl | null;
  @HostBinding('class.disabled')
  protected isDisabled = false;
  private onChange: (value: NonNullable<unknown> | null) => void =
    (_: NonNullable<unknown> | null) => { };
  private onTouched: () => void = () => { };
  protected readonly form = inject(FormBuilder).nonNullable.control('');
  public get inputValue(): string {
    return this.form.value;
  };
  protected openingDuration = 400;
  protected canType = false;
  private readonly getPropertyPipe = inject(GetPropertyPipe);
  private readonly cd = inject(ChangeDetectorRef);

  public ngOnInit(): void {
    this.control = this.injector.get(NgControl, null, { self: true, optional: true });
    this.canType = !!this.injector.get(AutocompleteDirective, null, { self: true, optional: true });
  }

  public ngOnDestroy(): void {
    this.isOpenSub.unsubscribe();
  }

  @HostListener('document:click', ['$event.target'])
  public onOutsideClick(target: HTMLElement): void {
    if (!this.elRef.nativeElement.contains(target)) {
      if (this.isOpen) {
        this.isOpenSubject.next(false);
        this.onTouched();
      }
      if (this.form.touched) {
        this.onTouched();
      }
    }
  }

  @HostListener('click')
  public onClick(): void {
    this.input.focus();
  }

  @HostListener('keydown', ['$event'])
  public onKeydown(event: KeyboardEvent): void {
    if (!this.isOpen && event.key === 'ArrowDown') {
      this.isOpenSubject.next(true);
    }
    if (this.isOpen && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
      this.dropdownContainer!.listKeyManager.onKeydown(event);
    }
    if (this.isOpen && event.key === 'Enter' && this.dropdownContainer!.listKeyManager.activeItem) {
      const chosenData = this.dropdownContainer!.listKeyManager.activeItem;
      if (chosenData.value !== this.chosenValue) {
        this.selectOption(chosenData.value, chosenData.display);
        this.onChange(this.chosenValue);
        this.closeOnSelect && this.isOpenSubject.next(false);
      }
      this.onTouched();
    }
    if (this.isOpen && event.key === 'Escape') {
      this.isOpenSubject.next(false);
    }
  }

  public writeValue(value: unknown): void {
    queueMicrotask(() => {
      const chosenData = this.dropdownData.find(d => d.value === value);
      chosenData ? this.selectOption(chosenData.value, chosenData.display) : this.clearOption();
      this.input.cd.markForCheck();
    });
  }

  public registerOnChange(fn: (value: NonNullable<unknown> | null) => void): void {
    this.onChange = (value: NonNullable<unknown> | null) => {
      fn(value);
      this.input.cd.markForCheck();
    };
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = () => {
      fn();
      this.input.cd.markForCheck();
    };
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.isDisabled && this.isOpenSubject.next(false);
    this.isDisabled ? this.form.disable() : this.form.enable();
  }

  protected onInputFocusout(event: FocusEvent): void {
    if (event.relatedTarget) {
      if (this.isOpen) {
        this.isOpenSubject.next(false);
      }
      this.onTouched();
    }
    this.updateInputValue();
  }

  protected onArrowClick(): void {
    this.isOpenSubject.next(!this.isOpen);
  }

  protected onOptionClick(chosenData: DropdownData): void {
    if (chosenData.value !== this.chosenValue) {
      this.selectOption(chosenData.value, chosenData.display);
      this.onChange(this.chosenValue);
      this.closeOnSelect && this.isOpenSubject.next(false);
    }
    this.onTouched();
  }

  protected onEmptyContainerClick(): void {
    this.isOpenSubject.next(false);
  }

  protected onClearOptionClick(): void {
    this.clearOption();
    this.onChange(this.chosenValue);
    this.onTouched();
    this.isOpenSubject.next(false);
  }

  private selectOption(value: NonNullable<unknown>, display: NonNullable<unknown>): void {
    this._chosenValue = value;
    this._chosenDisplay = display;
    this.updateInputValue();
  }

  private clearOption(): void {
    this._chosenValue = null;
    this._chosenDisplay = null;
    this.updateInputValue();
  }

  private updateInputValue(): void {
    this.form.setValue(String(this.chosenDisplay ?? ''));
  }

  private setData(data: NonNullable<unknown>[]): void {
    // TODO: data checking
    this._data = data.map(d => {
      return {
        value: this.getPropertyPipe.transform(d, this.valuePropertyPath),
        display: this.getPropertyPipe.transform(d, this.displayPropertyPath),
        data: d,
      }
    });
  }

}
