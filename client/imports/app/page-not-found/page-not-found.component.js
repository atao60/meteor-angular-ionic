import { Component } from '@angular/core';

class PageNotFoundComponent {

  static get annotations() {
    return [
      new Component({
        selector: 'page-not-found',
        templateUrl: 'client/imports/app/page-not-found/page-not-found.html',        
      })
    ];
  }

}

export { PageNotFoundComponent }
