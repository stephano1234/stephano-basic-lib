import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[allowedStrings]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AllowedStringDirective,
    multi: true
  }]
})
export class AllowedStringDirective implements Validator {

  @Input({ required: true })
  public allowedStrings!: string[];

  public validate({ value }: AbstractControl<string>): ValidationErrors | null {
    return !value || this.allowedStrings.includes(value) ? null : {
      allowedStrings: `The allowed values for this field are ${this.allowedStrings.join(', ')}.`
    };
  }

}
