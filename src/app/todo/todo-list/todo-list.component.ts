import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todoList: any;
  form: FormGroup;
  loading = true;
  elementRotation: number;
  draggedTaskId: string;
  constructor(private todoService: TodoService, private fb: FormBuilder, private sanitizer: DomSanitizer) {

  }

  addTask() {

    if (this.form.valid) {
      this.todoService.addTask(this.form.value).then(() => {
        this.form.get('name').patchValue('');
        this.form.get('description').patchValue('');
      });
    }
  }

  removeTask(event) {

    this.todoService.remove(event.dropData.id).then((data) => {
    });
  }

  updateTask(task) {

    this.todoService.updateTask(task).then(data => {
    });
  }

  dragging(event, taskId) {
    this.elementRotation = event.x / 8;
    this.draggedTaskId = taskId;
  }

  getRotation(taskId) {
    if (this.draggedTaskId === taskId) {
      return this.sanitizer.bypassSecurityTrustStyle(`rotate(${this.elementRotation}deg)`);
    } else {
      return 0;
    }

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
