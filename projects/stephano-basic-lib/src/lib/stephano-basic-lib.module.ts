import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { table } from './table';
import { dropdown } from './dropdown';
import { icon } from './icon';
import { input } from './input';
import { mask } from './mask';
import { pagination } from './pagination';
import { spinner } from './spinner';
import { shared } from './shared';

const exports = [
  ...shared,
  ...spinner,
  ...dropdown,
  ...icon,
  ...input,
  ...mask,
  ...pagination,
  ...table,
];

@NgModule({
  declarations: [
    ...exports,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OverlayModule,
    ScrollingModule,
  ],
  exports: [
    ...exports,
  ],
  providers: [
  ],
})
export class StephanoBasicLibModule { }

export * from './shared';
export * from './dropdown';
export * from './icon';
export * from './input';
export * from './mask';
export * from './table';
export * from './pagination';
export * from './spinner';
