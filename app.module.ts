import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Multiples } from './multiples/multiples.component';
import { RightTriangle } from './right-triangle/right-triangle.component';
import { LeftTriangle } from './left-triangle/left-triangle.component';
import { NoneBasePyramid } from './none-base-pyramid/none-base-pyramid.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { CalculateButtonComponent } from './calculate-button/calculate-button.component';
import { LeapYearComponent } from './leap-year/leap-year.component';
import { PrimeNumberComponent } from './prime-number/prime-number.component';
import { BetweenElseFinallyComponent } from './between-else-finally/between-else-finally.component';

@NgModule({
  declarations: [
    AppComponent,
    Multiples,
    RightTriangle,
    LeftTriangle,
    NoneBasePyramid,
    ActionBarComponent,
    MaxMinMeterComponent,
    CalculateButtonComponent,
    LeapYearComponent,
    PrimeNumberComponent,
    BetweenElseFinallyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
