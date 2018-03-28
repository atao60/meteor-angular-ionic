import { Meteor } from 'meteor/meteor';
import { Component } from '@angular/core';

export class TodoAddComponent {

  static get annotations() {
    return [
      new Component({
        selector: 'todo-add',
        templateUrl: 'client/imports/app/todo-add/todo-add.html',        
      })
    ];
  }

  content/*: string*/;
  addTodo() {
    Meteor.call('addTodo', this.content);
    this.content = null;
  }
}
