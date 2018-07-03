import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {TodoList} from '../todoList';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Task} from '../Task';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: any;
  form: FormGroup;
  loading = true;
  constructor(private todoService: TodoService, private fb: FormBuilder) {

  }

  addTask() {
    this.todoService.addTask(this.form.value).then(() => {
      this.form.get('name').patchValue('');
    });
  }

  removeTask(id) {
    this.todoService.remove(id).then((data) => {
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      done: [false]
    });

    this.todoService.getList().subscribe( next => {
      this.todoList = next;
      this.loading = false;
    });
  }



}
