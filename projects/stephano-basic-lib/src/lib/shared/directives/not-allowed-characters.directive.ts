import { Directive, HostListener, Input } from "@angular/core";

@Directive({
  selector: 'input[sblInput][notAllowedCharacters]'
})
export class NotAllowedCharactersDirective {

  @Input({ alias: 'notAllowedCharacters', required: true })
  public characters!: string;

  @HostListener('beforeinput', ['$event'])
  public onInput(event: InputEvent) {
    if (event.data && this.characters.includes(event.data)) {
      event.preventDefault();
    }
  }

}
