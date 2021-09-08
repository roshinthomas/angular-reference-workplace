import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { ProgressBarCircleComponent } from './circular-progress-bar/circular-progress-bar';

@NgModule({
  declarations: [
    ProgressBarCircleComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    ProgressBarCircleComponent
  ],
})
export class WidgetsModule { }
