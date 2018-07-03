import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import {TodoService} from './todo.service';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    TodoService
  ],
  declarations: [TodoListComponent]
})
export class TodoModule { }
