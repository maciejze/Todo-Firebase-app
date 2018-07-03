import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragAndDropModule} from 'angular-draggable-droppable';

@NgModule({
  imports: [
    CommonModule,
    DragAndDropModule.forRoot()
  ],
  exports:[
    DragAndDropModule
  ],
  declarations: []
})
export class SharedModule { }
