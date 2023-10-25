import { HeaderDirective } from './directives/header.directive';
import { RowDefDirective } from './directives/row-def.directive';
import { RowDirective } from './directives/row.directive';
import { TableDirective } from './directives/table.directive';

export const table = [
  HeaderDirective,
  RowDefDirective,
  RowDirective,
  TableDirective,
];

// Directives
export * from './directives/header.directive';
export * from './directives/row-def.directive';
export * from './directives/row.directive';
export * from './directives/table.directive';
// Models
export * from './models/table.model';
