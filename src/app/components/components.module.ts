import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { IncrementatorComponent } from './incrementator/incrementator.component';
import { FormsModule } from '@angular/forms';
import { DougnutComponent } from './dougnut/dougnut.component';



@NgModule({
  declarations: [
    IncrementatorComponent,
    DougnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports:[
    IncrementatorComponent,
    DougnutComponent
  ]
})
export class ComponentsModule { }
