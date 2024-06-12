import {
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  inject
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MaskDirective } from '../../mask';
import { InputComponent } from '../components/input/input.component';

@Directive({
  selector: 'input[sblInput]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputDirective,
      multi: true,
    },
  ],
})
export class InputDirective implements ControlValueAccessor, OnInit, OnDestroy {

  @Input()
  public containerControl: NgControl | null = null;
  public control!: NgControl | null;
  public onChange: (value: string | null) => void = (_: string | null) => { };
  public onTouched: () => void = () => { };
  public readonly inputElement: ElementRef<HTMLInputElement> = inject(ElementRef);
  private readonly inputComponent = inject(InputComponent, { host: true });
  private readonly maskDirective = inject(MaskDirective, { host: true, optional: true });
  private readonly injector = inject(Injector);
  private statusChangesSub?: Subscription;

  public ngOnInit(): void {
    this.control = this.injector.get(NgControl, null, { self: true, optional: true });
    this.containerControl && (this.control = this.containerControl);
    this.statusChangesSub = this.control?.statusChanges?.subscribe(() =>
      this.inputComponent.cd.markForCheck()
    );
    this.maskDirective && this.inputComponent.elRef.nativeElement.style.setProperty(
      this.maskDirective.maskPlaceholderProperty,
      this.maskDirective.maskPlaceholder,
    );
  }

  public ngOnDestroy(): void {
    this.statusChangesSub?.unsubscribe();
  }

  @HostListener('input', ['$event.target.value'])
  protected onInput(value: string): void {
    this.onTouched();
    this.maskDirective && (value = this.maskDirective.value!);
    this.onChange(value);
    this.inputComponent.cd.markForCheck();
  }

  public writeValue(value: string | null): void {
    this.maskDirective && (value = this.maskDirective.processValue(value));
    this.inputElement.nativeElement.value = (value === undefined || value === null) ? '' : value;
    this.inputComponent.cd.markForCheck();
  }

  public registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.inputComponent.isDisabled = isDisabled;
    this.inputElement.nativeElement.disabled = isDisabled;
    this.inputComponent.cd.markForCheck();
  }

}
