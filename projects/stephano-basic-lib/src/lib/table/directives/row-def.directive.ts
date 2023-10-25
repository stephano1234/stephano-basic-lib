import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef, inject } from "@angular/core";
import { tap } from "rxjs";
import { TableDirective } from "./table.directive";
import { TableRecordData } from "../models/table.model";

@Directive({
  selector: '[sblRowDef]',
})
export class RowDefDirective implements OnDestroy {

  @Input({ alias: 'sblRowDefDisplayedColumns' })
  public displayedColumns: string[] | null = null;
  private readonly vcr = inject(ViewContainerRef);
  private readonly tr: TemplateRef<TableRecordData & { $implicit: unknown }> = inject(TemplateRef);
  private readonly tableDirective = inject(TableDirective);
  private readonly tableRecordDataSub = this.tableDirective.tableRecordData$.pipe(
    tap(tableRecordData => {
      this.vcr.clear();
      tableRecordData.map(trd => this.vcr.createEmbeddedView(
        this.tr,
        { $implicit: trd.record, ...trd },
      ));
    }),
  ).subscribe();

  public ngOnDestroy(): void {
    this.tableRecordDataSub.unsubscribe();
    this.vcr.clear();
  }

}
