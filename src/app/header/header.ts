import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <mat-toolbar color="primary">
            <a routerLink="/home" routerLinkActive="active">Home</a>
            <span class="fill-remaining-space"></span>
            <a routerLink="/questionair" routerLinkActive="active">Start</a>
            <a routerLink="/login" routerLinkActive="active">Log In</a>
            <a routerLink="/register" routerLinkActive="active">Sign Up</a>
            <a routerLink="/contactus" routerLinkActive="active">Contact us</a>
        </mat-toolbar>
  `,
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
      `
  ]
})
export class HeaderComponent {
    title = 'header';
}
