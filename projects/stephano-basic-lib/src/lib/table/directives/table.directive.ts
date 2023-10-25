import { Directive, Input, inject } from '@angular/core';
import { Observable, Subject, combineLatestWith, map, of, switchMap } from 'rxjs';
import { GetPropertyPipe } from '../../shared/pipes/get-property.pipe';
import { TableRecordData, TableStructure } from '../models/table.model';

@Directive({
  selector: '[sblTable]',
  providers: [
    GetPropertyPipe,
  ],
})
export class TableDirective {

  private readonly structureSubject = new Subject<TableStructure[]>();
  @Input({ required: true })
  public set structure(structure: TableStructure[]) {
    this.structureSubject.next(structure);
  };
  private readonly dataSubject =
    new Subject<Observable<NonNullable<unknown>[]> | NonNullable<unknown>[]>();
  public readonly tableRecordData$: Observable<TableRecordData[]> = this.dataSubject
    .asObservable()
    .pipe(
      switchMap(data => data instanceof Observable ? data : of(data)),
      combineLatestWith(this.structureSubject),
      map(([data, structure]) => data.map((d, i) => {
        const record = Object.fromEntries(structure.map(s => {
          return [s.id, this.getPropertyPipe.transform(d, s.propertyPath)];
        }));
        return { record, index: i, data: d };
      })),
    );
  @Input({ required: true })
  public set data(data: Observable<NonNullable<unknown>[]> | NonNullable<unknown>[]) {
    this.dataSubject.next(data);
  };
  private readonly getPropertyPipe = inject(GetPropertyPipe);

}
