import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StephanoBasicLibModule } from 'stephano-basic-lib';
import { DocPanelComponent } from './doc-panel/doc-panel.component';
import { HighlightCodePipe } from './highlight-code.pipe';
import { AllowedStringDirective } from './allowed-strings.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DocPanelComponent,
    HighlightCodePipe,
    AllowedStringDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    StephanoBasicLibModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StephanoBasicLibModule,
    DocPanelComponent,
    HighlightCodePipe,
    AllowedStringDirective
  ]
})
export class SharedModule { }
