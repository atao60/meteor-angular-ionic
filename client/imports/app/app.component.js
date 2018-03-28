import { Component } from '@angular/core';

class AppComponent {
  static get annotations() {
    return [
      new Component({
        selector: 'app',
        templateUrl: 'client/imports/app/app.html'
      })
    ];
  }
}

export { AppComponent };