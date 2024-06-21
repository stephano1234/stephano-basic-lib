import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { table } from './table';
import { dropdown } from './dropdown';
import { icon } from './icon';
import { input } from './input';
import { pagination } from './pagination';
import { spinner } from './spinner';
import { shared } from './shared';
import { modal } from './modal';
import { bottomScroll } from './bottom-scroll';

const exports = [
  ...shared,
  ...spinner,
  ...bottomScroll,
  ...dropdown,
  ...icon,
  ...input,
  ...modal,
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
export * from './bottom-scroll';
export * from './dropdown';
export * from './icon';
export * from './input';
export * from './modal';
export * from './table';
export * from './pagination';
export * from './spinner';
