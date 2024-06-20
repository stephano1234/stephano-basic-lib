import { Directive, HostListener, Input } from "@angular/core";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { MaskUtils } from "../utils/mask.utils";

const EMPTY = '';
const SPACE = ' '

@Directive({
  selector: 'input[sblInput][mask]',
})
export class MaskDirective {

  public readonly maskPlaceholderProperty = '--mask-placeholder';
  private processedInput = '';
  private processedSelectIndex = 0;
  private inputPositionMap!: { [key: number]: number };
  private deleteBackwardPositionMap!: { [key: number]: number };
  private moveForwardPositionMap!: { [key: number]: number };
  private moveBackwardPositionMap!: { [key: number]: number };
  private _maskPlaceholder!: string;
  public get maskPlaceholder(): string {
    return this._maskPlaceholder;
  };
  private maskOnlyChars!: string[];
  private maskChars!: string[];
  private _mask!: string;
  @Input({ required: true })
  public set mask(mask: string) {
    this._mask = mask;
    this.maskChars = this.mask.split(EMPTY);
    this.maskOnlyChars = this.maskChars.filter(char => char !== SPACE);
    this._maskPlaceholder = `"${this.mask.replaceAll(SPACE, '\\00a0')}"`;
    this.setPositionMaps();
  };
  public get mask(): string {
    return this._mask;
  };
  private _maskedValue: string | null = null;
  public get maskedValue(): string | null {
    return this._maskedValue;
  };
  private _unmaskedValue: string | null = null;
  public get unmaskedValue(): string | null {
    return this._unmaskedValue;
  };
  @Input({
    transform: (dropMaskCharacters: string | boolean): boolean => {
      return coerceBooleanProperty(dropMaskCharacters);
    }
  })
  public dropMaskCharacters = false;
  public get value(): string | null {
    return this.dropMaskCharacters ? this.unmaskedValue : this.maskedValue;
  }

  @HostListener('keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent): void {
    const inputEl = event.target as HTMLInputElement;
    let selectionIndex = inputEl.selectionStart!;
    if (event.key === 'ArrowRight') {
      selectionIndex = this.moveForwardPositionMap[selectionIndex]!;
      inputEl.setSelectionRange(selectionIndex, selectionIndex);
    }
    if (event.key === 'ArrowLeft') {
      selectionIndex = this.moveBackwardPositionMap[selectionIndex]!;
      inputEl.setSelectionRange(selectionIndex, selectionIndex);
    }
  }

  @HostListener('beforeinput', ['$event'])
  public onBeforeInput(event: InputEvent): void {
    const inputEl = event.target as HTMLInputElement;
    let selection =
      inputEl.selectionDirection === 'forward' ? inputEl.selectionEnd! : inputEl.selectionStart!;
    if (event.data || event.inputType === 'deleteContentForward') {
      selection = this.inputPositionMap[selection]!;
    } else if (event.inputType === 'deleteContentBackward') {
      selection = this.deleteBackwardPositionMap[selection]!;
    }
    const data = event.data?.slice(-1) ?? null;
    const inputResult = MaskUtils.getInputResult(
      inputEl.value,
      selection,
      selection,
      data,
      event.inputType,
    );
    this.processedInput = this.processValue(inputResult.input)!;
    this.processedSelectIndex = inputResult.select;
  }

  @HostListener('input', ['$event'])
  public onInput(event: InputEvent): void {
    const inputEl = event.target as HTMLInputElement;
    inputEl.value = this.processedInput;
    inputEl.setSelectionRange(this.processedSelectIndex, this.processedSelectIndex);
  }

  public processValue(unprocessedValue: string | null): string | null {
    if (unprocessedValue === null) return null;
    this._unmaskedValue = unprocessedValue.replaceAll(SPACE, EMPTY);
    const unmaskedValueChars = this.unmaskedValue!.split(EMPTY);
    const maskedValueChars = this.maskChars.slice();
    for (let i = 0; i < unmaskedValueChars.length; i++) {
      const nextValueCharIndex = maskedValueChars.findIndex(char => char === SPACE);
      maskedValueChars[nextValueCharIndex] = unmaskedValueChars[i]!;
    };
    this._maskedValue = maskedValueChars.join(EMPTY);
    for (let i = 0; i < this.maskChars.length; i++) {
      if (this.maskChars[i] !== SPACE) {
        maskedValueChars[i] = SPACE;
      }
    };
    return maskedValueChars.join(EMPTY).trimEnd();
  }

  private setPositionMaps(): void {
    this.setForwardPositionMaps();
    this.setBackwardPositionMaps();
  }

  private setBackwardPositionMaps() {
    const reversedMaskChar = this.maskChars.slice().reverse();
    this.deleteBackwardPositionMap = { 0: 0 };
    this.moveBackwardPositionMap = { 0: 0 };
    for (let i = 0; i < reversedMaskChar.length; i++) {
      if (this.maskOnlyChars.includes(reversedMaskChar[i]!)) {
        let nextSelectionPosition = reversedMaskChar.slice(i)
          .findIndex(char => char === SPACE);
        nextSelectionPosition = nextSelectionPosition !== -1 ?
          nextSelectionPosition + i : reversedMaskChar.length;
        this.deleteBackwardPositionMap[reversedMaskChar.length - i] =
          reversedMaskChar.length - nextSelectionPosition;
        this.moveBackwardPositionMap[reversedMaskChar.length - i] =
          reversedMaskChar.length - nextSelectionPosition + 1;
      } else {
        this.deleteBackwardPositionMap[reversedMaskChar.length - i] =
          reversedMaskChar.length - i;
        this.moveBackwardPositionMap[reversedMaskChar.length - i] =
          reversedMaskChar.length - i;
      }
    }
  }

  private setForwardPositionMaps() {
    this.inputPositionMap = {};
    this.moveForwardPositionMap = {};
    this.inputPositionMap[this.maskChars.length] = this.maskChars.length;
    this.moveForwardPositionMap[this.maskChars.length] = this.maskChars.length;
    for (let i = 0; i < this.maskChars.length; i++) {
      if (this.maskOnlyChars.includes(this.maskChars[i]!)) {
        let nextSelectionPosition = this.maskChars.slice(i)
          .findIndex(char => char === SPACE);
        nextSelectionPosition = nextSelectionPosition !== -1 ?
          nextSelectionPosition + i : this.maskChars.length;
        this.inputPositionMap[i] = nextSelectionPosition;
        this.moveForwardPositionMap[i] = nextSelectionPosition - 1;
      } else {
        this.inputPositionMap[i] = i;
        this.moveForwardPositionMap[i] = i;
      }
    }
  }

}
