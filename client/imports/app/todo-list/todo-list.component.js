import { Component/*, OnInit, OnDestroy*/ } from '@angular/core';

// import { Observable } from 'rxjs/Observable';
// import { Subscription } from 'rxjs/Subscription';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import { Todos } from '../../../../imports/collections/todos';
import { Todo } from '../../../../imports/models/todo';

class TodoListComponent/* implements OnInit, OnDestroy*/ {
  
  static get annotations() {
    return [
      new Component({
        selector: 'todo-list',
        templateUrl: 'client/imports/app/todo-list/todo-list.html',        
        styleUrls: ['client/imports/app/todo-list/todo-list.scss']      
      })
    ];
  }

  todos/*: Observable<Todo[]>*/;
  todoListSubscription/*: Subscription*/;
  ngOnInit() {
    this.todoListSubscription = MeteorObservable.subscribe('todoList').subscribe(() => {
      this.todos = Todos.find();
    });
  }
  ngOnDestroy() {
    if (this.todoListSubscription) {
      this.todoListSubscription.unsubscribe();
    }
  }
  removeTodo(_id/*: string*/) {
    Meteor.call('removeTodo', _id);
  }
}

export { TodoListComponent }