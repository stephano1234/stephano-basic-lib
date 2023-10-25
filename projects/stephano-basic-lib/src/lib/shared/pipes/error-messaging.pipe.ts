import { InjectionToken, Pipe, PipeTransform, Provider, inject } from "@angular/core";

export type ErrorMessaging = {
  [key: string]: (arg: any) => string;
};

export const DEFAULT_ERROR_MESSAGING: ErrorMessaging = {
  required: _ => 'The field is required.',
  minlength: ({ requiredLength }) =>
    `The field must have at least ${requiredLength} character(s).`,
  maxlength: ({ requiredLength }) =>
    `The field must not have more than ${requiredLength} character(s).`,
};

export const ERROR_MESSAGING = new InjectionToken<ErrorMessaging>(
  'error.messaging',
  { providedIn: 'root', factory: () => DEFAULT_ERROR_MESSAGING },
);

export function provideErrorMessaging(errorMessaging: ErrorMessaging): Provider {
  return {
    provide: ERROR_MESSAGING,
    useValue: { ...DEFAULT_ERROR_MESSAGING, ...errorMessaging },
  }
};

@Pipe({ name: 'errorMessaging' })
export class ErrorMessagingPipe implements PipeTransform {

  private readonly errorMessaging = inject(ERROR_MESSAGING);

  public transform(error: { key: string, value: any }): string {
    return this.errorMessaging[error.key] ?
      this.errorMessaging[error.key]!(error.value) : error.value;
  }

}
