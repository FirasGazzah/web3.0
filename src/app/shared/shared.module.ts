import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { StringFormat } from './util/string-format';

import localeNlBe from '@angular/common/locales/nl-BE';
registerLocaleData(localeNlBe);

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    StringFormat
  ]
})
export class SharedModule { }
