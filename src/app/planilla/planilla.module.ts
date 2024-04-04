import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanillaRoutingModule } from './planilla-routing.module';
import { PlanillaComponent } from './planilla/planilla.component';


@NgModule({
  declarations: [
    PlanillaComponent
  ],
  imports: [
    CommonModule,
    PlanillaRoutingModule
  ]
})
export class PlanillaModule { }
