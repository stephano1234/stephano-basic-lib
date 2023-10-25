import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'equals' })
export class EqualsPipe implements PipeTransform {

  public transform(a: unknown, b: unknown): boolean {
    return a === b;
  }

}
