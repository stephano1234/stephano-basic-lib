import { Component, Input } from "@angular/core";

@Component({
  selector: 'sbld-doc-panel',
  templateUrl: './doc-panel.component.html',
  styleUrls: ['./doc-panel.component.scss']
})
export class DocPanelComponent {

  @Input({ required: true })
  public code!: string;
  @Input()
  public language = 'xml';
  @Input()
  public backgroundColor: 'dark' | 'light-dark' | 'light' = 'dark';

}
