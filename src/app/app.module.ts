import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnlyNumericValidatorDirective } from './onlynumeric-validator';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, OnlyNumericValidatorDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
