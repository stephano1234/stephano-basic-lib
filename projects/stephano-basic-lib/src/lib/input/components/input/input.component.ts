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
import { CdkOverlayOrigin, ConnectedPosition } from '@angular/cdk/overlay';
import { InputDirective } from '../../directives/input.directive';

@Component({
  selector: 'sbl-input',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [CdkOverlayOrigin],
})
export class InputComponent implements OnInit {

  public readonly elRef: ElementRef<HTMLInputElement> = inject(ElementRef);
  @Input()
  public loading = false;
  public readonly cd = inject(ChangeDetectorRef);
  protected inputElementComputedHeight = 0;
  protected readonly cdkOverlayOrigin = inject(CdkOverlayOrigin, { self: true });
  public get control(): NgControl | null | undefined {
    return this.inputDirective?.control;
  };
  @HostBinding('class.disabled')
  public isDisabled = false;
  protected showErrors = false;
  protected isFocused = false;
  protected isMouseOver = false;
  protected readonly positions: ConnectedPosition[] = [{
    originX: 'start',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'bottom',
  }];
  @ContentChild(InputDirective, { static: true })
  private inputDirective?: InputDirective;

  @HostListener('focusin')
  protected onFocusin(): void {
    this.isFocused = true;
    !this.showErrors && (this.showErrors = true);
  }

  @HostListener('focusout')
  protected onFocusout(): void {
    this.isFocused = false;
    !this.isMouseOver && (this.showErrors = false);
    this.inputDirective?.onTouched();
  }

  @HostListener('mouseover')
  protected onMouseOver(): void {
    this.isMouseOver = true;
    !this.showErrors && (this.showErrors = true);
  }

  @HostListener('mouseout')
  protected onMouseOut(): void {
    this.isMouseOver = false;
    !this.isFocused && (this.showErrors = false);
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
