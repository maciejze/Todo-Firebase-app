import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragAndDropModule} from 'angular-draggable-droppable';
import {AngularDateTimePickerModule} from 'angular2-datetimepicker';

@NgModule({
  imports: [
    CommonModule,
    DragAndDropModule.forRoot(),
    AngularDateTimePickerModule
  ],
  exports:[
    DragAndDropModule,
    AngularDateTimePickerModule
  ],
  declarations: []
})
export class SharedModule { }
