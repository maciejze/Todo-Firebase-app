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
  settings: any;
  date: Date;
  constructor(private todoService: TodoService, private fb: FormBuilder, private sanitizer: DomSanitizer) {

  }

  addTask() {

    if (this.form.valid) {
      const data = this.form.value;
      data.dueDate = this.date;
      this.todoService.addTask(data).then(() => {
        this.form.get('name').patchValue('');
        this.form.get('description').patchValue('');
        this.date = undefined;
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

  getDayDifference(taskDate) {
    if (taskDate) {
      const date = new Date(taskDate);
      const currentDate = new Date();
      const timeDiff = date.getTime() - currentDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (daysDiff >= 0) {
        return daysDiff + ' days left';
      } else {
        return 'Time is over!';
      }
    }
  }

  ngOnInit() {

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      done: [false],
      description: [''],
    });

    this.todoService.getList().subscribe( next => {
      this.todoList = next;

      this.loading = false;

    });

    this.settings = {
      timePicker: true,
      format: '',
      bigBanner: false,
      closeOnSelect: true
    };
  }

  ngOnDestroy() {

  }

}
