import { Component, OnInit } from '@angular/core';

import { TodoService } from './Shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  toDoList: any[];

  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    this.toDoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.toDoList = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x['$key'] = element.key;
        this.toDoList.push(x);
        })
      });
    }

}
