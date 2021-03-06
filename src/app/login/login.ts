import { Component } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { UserService } from '../userService';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../myErrorStateMatcher';
import { Router } from '@angular/router';
import { SnackBar } from '../snackbar';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styles: [
        `
     .example-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 16px;
        padding: 32px;
      }
      
      .example-container > * {
        width: 60%;
      }

      mat-card {
          padding: 0 0 32px 0;
      }

      mat-card-header {
          background-color: #1976d2;
          color: white;
          padding: 16px;
      }
      mat-card-content{ 
        padding: 16px;
      }
      mat-card-actions {
          padding: 16px;
      }
      span.brand{
        font-size: large;
        color: #1976d2;
        padding-right: 8px;
      }
      `
    ]
})
export class LogInComponent {
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required
    ]);

    matcher = new MyErrorStateMatcher();

    constructor(private authService: AuthService,
        private userService: UserService, private router: Router,
        private snackBar: SnackBar) { }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            if (user != null) {
                console.log('Logged In', user.name);
                this.userService.user = user;
                this.userService.loggedIn = (user != null);
                this.snackBar.show(`Welcome ${this.userService.user.name}`);
                this.router.navigate(['./home']);
            }
        });
    }

    signInWithGoogle(): void {
        console.log('Calll SignIN with Google');
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signInWithFaceBook(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    onLogin() {
        this.router.navigate(['./home']);
    }

    signOut(): void {
        this.authService.signOut();
        this.userService.user = null;
        this.userService.loggedIn = false;
        this.snackBar.show(`Logged out`);
    }

    onReset() {
        this.emailFormControl.setValue('');
        this.passwordFormControl.setValue('');
    }
}
