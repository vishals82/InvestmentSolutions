import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
  styles: [
      `
      .fill-remaining-space {
        flex: 1 1 auto;
      }
      a {
          padding: 0 16px;
      }
      a.active {
          color: white;
      }
      mat-toolbar {
        background-color: #1976d2;
      }
      `
  ]
})
export class HeaderComponent {
    title = 'header';
}
