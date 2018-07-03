import {Component, OnDestroy, OnInit} from '@angular/core';
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
export class TodoListComponent implements OnInit, OnDestroy {
  todoList: any;
  form: FormGroup;
  loading = true;

  constructor(private todoService: TodoService, private fb: FormBuilder) {

  }

  addTask() {
    if (this.form.valid) {
      this.todoService.addTask(this.form.value).then(() => {
        this.form.get('name').patchValue('');
        this.form.get('description').patchValue('');
      });
    }
  }

  removeTask(id) {
    this.todoService.remove(id).then((data) => {
    });
  }

  updateTask(task) {
    this.todoService.updateTask(task).then(data => {

    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      done: [false],
      description: ['']
    });

    this.todoService.getList().subscribe( next => {
      this.todoList = next;
      this.loading = false;

    });
  }

  ngOnDestroy() {

  }

}
