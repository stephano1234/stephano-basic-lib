import { Directive, HostListener, Input } from "@angular/core";

const EMPTY = '';

@Directive({
  selector: 'input[sblInput][allowedPattern]'
})
export class AllowedPatternDirective {

  @Input({
    alias: 'allowedPattern',
    required: true,
    transform: (stringPattern: string): RegExp => {
      let regexPattern = new RegExp(/.*/);
      try {
        regexPattern = new RegExp(stringPattern, 'g');
      } catch {
        console.warn(`
  Directive: AllowedPatternDirective

  Invalid regular expression "${stringPattern}".
  Regular expression ".*" is being applied.
        `);
      }
      return regexPattern;
    },
  })
  public pattern!: RegExp;
  private lastValue!: string;
  private selectionStart!: number;
  private selectionEnd!: number;

  @HostListener('beforeinput', ['$event'])
  public onBeforeInput(event: InputEvent): void {
    const inputEl = event.target as HTMLInputElement;
    this.lastValue = inputEl.value;
    this.selectionStart = inputEl.selectionStart!;
    this.selectionEnd = inputEl.selectionEnd!;
  }

  @HostListener('input', ['$event'])
  public onInput(event: InputEvent) {
    const inputEl = event.target as HTMLInputElement;
    if (
      event.inputType === 'insertText' ||
      event.inputType === 'insertFromPaste' ||
      event.inputType === 'insertCompositionText'
    ) {
      const capturedSize = inputEl.value.replaceAll(this.pattern, EMPTY).length;
      if (capturedSize > 0) {
        inputEl.value = this.lastValue;
        inputEl.setSelectionRange(this.selectionStart, this.selectionEnd);
      }
    }
  }

}
