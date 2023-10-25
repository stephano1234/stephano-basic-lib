import { Directive, HostListener, Input } from "@angular/core";

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
        regexPattern = new RegExp(stringPattern);
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

  @HostListener('beforeinput', ['$event'])
  public onInput(event: InputEvent) {
    if (event.data) {
      const result = this.pattern.exec(event.data);
      if (!result || result[0] !== result.input) {
        event.preventDefault();
      }
    }
  }

}
