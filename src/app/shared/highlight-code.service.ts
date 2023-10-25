import { Injectable } from "@angular/core";
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';

@Injectable({ providedIn: 'root' })
export class HighlightCodeService {

  constructor() {
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('javascript', javascript);
  }

  public highlightCode(code: string, language: string): string {
    return hljs.highlight(code, { language }).value;
  }

}
