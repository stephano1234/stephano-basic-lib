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

  public validate(control: AbstractControl<string>): ValidationErrors | null {
    return this.allowedStrings.includes(control.value) ? null : {
      allowedStrings: `The allowed values for this field are ${this.allowedStrings.join(', ')}.`
    };
  }

}
