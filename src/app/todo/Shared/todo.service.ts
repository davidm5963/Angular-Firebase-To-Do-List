import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
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
      isChecked: false
    }
    );
  }

  checkOrUncheckItem($key: string, flag: boolean)
  {
    this.toDoList.update($key, { isChecked: flag });
  }

  deleteItem($key: string)
  {
    this.toDoList.remove($key);
  }
}
