import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

const COMPONENTS: Type<any>[] = [];
const DIRECTIVES: Type<any>[] = [];

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...SHARED_ZORRO_MODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...SHARED_ZORRO_MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {}
