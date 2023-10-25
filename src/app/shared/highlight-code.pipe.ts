import { Pipe, PipeTransform, inject } from "@angular/core";
import { HighlightCodeService } from "./highlight-code.service";

@Pipe({ name: 'highlightCode' })
export class HighlightCodePipe implements PipeTransform {

  private readonly highlightCodeService = inject(HighlightCodeService);

  public transform(code: string, language: string): string {
    return this.highlightCodeService.highlightCode(code, language);
  }

}
