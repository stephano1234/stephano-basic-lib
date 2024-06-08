import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { InputDirective } from '../../directives/input.directive';

@Component({
  selector: 'sbl-input',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {

  public readonly elRef: ElementRef<HTMLInputElement> = inject(ElementRef);
  @Input()
  public loading = false;
  public readonly cd = inject(ChangeDetectorRef);
  protected inputElementComputedHeight = 0;
  public get control(): NgControl | null | undefined {
    return this.inputDirective?.control;
  };
  @HostBinding('class.disabled')
  public isDisabled = false;
  @ContentChild(InputDirective, { static: true })
  private inputDirective?: InputDirective;

  @HostListener('focusout')
  protected onFocusout(): void {
    this.inputDirective?.onTouched();
  }

  public ngOnInit(): void {
    if (!this.inputDirective) {
      throw new Error(`
  Component: sbl-input

  Missing content: input tag with the sblInput attribute.
  Suggested solution:

  <lib-input>
    <input sblInput/>
  </lib-input>
      `);
    }
    this.inputElementComputedHeight = this.inputDirective.inputElement.nativeElement.clientHeight;
  }

  public focus() {
    this.inputDirective?.inputElement.nativeElement.focus();
  }
}
