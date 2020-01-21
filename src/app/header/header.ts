import { Component } from '@angular/core';
import { UserService } from '../userService';
import { AuthService } from 'angularx-social-login';
import { SnackBar } from '../snackbar';

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
      a.sign-out {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: underline;
      }
      `
  ]
})
export class HeaderComponent {
    title = 'header';
    constructor(public userService: UserService, private authService: AuthService,
      private snackBar: SnackBar) { }

    onLogOut() {
      this.authService.signOut();
      this.userService.user = null;
      this.userService.loggedIn = false;
      this.snackBar.show(`Logged out`);
    }
}
