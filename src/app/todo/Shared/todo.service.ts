import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  getToDoList()
  {
    this.toDoList = this.db.list('titles');
    return this.toDoList;
  }

  addToDoItem(title: string)
  {
    this.toDoList.push({
      title: title,
      isChecked: false;
    }
    );
  }
}
