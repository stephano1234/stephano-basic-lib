import { Component } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: 'sbld-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class TableComponent {

  protected readonly code = `<table
  sblTable
  [data]="[
    { pack1: { subPack1: 'text' }, pack2: [1, 5000], pack3: 'text text text' },
    { pack1: { subPack1: 'texttext' }, pack2: [2, 5000], pack3: 'text text text' },
    { pack1: { subPack1: 'texttexttext' }, pack2: [3, 5000], pack3: 'text text text' },
    { pack1: { subPack1: 'texttexttexttext' }, pack2: [4, 5000], pack3: 'text text text' },
    { pack1: { subPack1: 'texttexttexttexttext' }, pack2: [5, 5000], pack3: 'text text text' }
  ]"
  [structure]="[
    { id: 'col1Value', propertyPath: 'pack1.subPack1' },
    { id: 'col2Value', propertyPath: 'pack2' },
    { id: 'col3Value', propertyPath: 'pack2.1' },
    { id: 'col4Value', propertyPath: '' },
    { id: 'col5Value', propertyPath: 'pack3' },
    { id: 'col6Value', propertyPath: 'pack3' }
  ]"
>
  <tr sblHeader>
    <th>column1</th>
    <th>column2</th>
    <th>column3</th>
    <th>column4</th>
    <th>column5</th>
    <th>column6</th>
  </tr>
  <tr sblRow *sblRowDef="let record; let i = index;">
    <td>{{ record.col1Value }}</td>
    <td>{{ record.col2Value }}</td>
    <td>{{ record.col3Value }}</td>
    <td>{{ record.col4Value | json }}</td>
    <td>{{ record.col5Value }}</td>
    <td>{{ record.col6Value }}</td>
  </tr>
</table>`;
  protected value: string | null = null;

}
