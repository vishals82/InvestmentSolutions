import { Component } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { UserService } from '../userService';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../myErrorStateMatcher';
import { Router } from '@angular/router';

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
        private userService: UserService, private router: Router) { }

    ngOnInit() {
        console.log('LogInComponent');
        this.authService.authState.subscribe((user) => {
            this.userService.user = user;
            this.userService.loggedIn = (user != null);
        });
    }

    signInWithGoogle(): void {
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
    }

    onReset() {
        this.emailFormControl.setValue('');
        this.passwordFormControl.setValue('');
    }
}
