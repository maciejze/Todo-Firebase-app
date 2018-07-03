import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {TodoList} from './todoList';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Task} from './Task';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: AngularFirestoreCollection<Task>;

  constructor(private db: AngularFirestore) {
    this.todoList = db.collection<Task>(environment.dbCollection);
  }

  getList() {
    return this.db.collection(environment.dbCollection).snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data};
        });
    }));
  }

  addTask(task: Task) {
    return this.todoList.add({
      name: task.name,
      done: task.done,
      description: task.description
    });
  }

  updateTask(task) {
    return this.todoList.doc(task.id).update(task.data);
  }

  remove(id) {
    return this.todoList.doc(id).delete();
  }



}
