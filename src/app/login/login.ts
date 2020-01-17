import { Component } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { UserService } from '../userService';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../myErrorStateMatcher';

@Component({
    selector: 'app-login',
    template: `

    <div class="example-container">

    <mat-card class="example-card">
    <mat-card-header>
        <mat-card-title>Log In</mat-card-title>
    </mat-card-header>
    <mat-card-content style="display: flex; flex-direction: column;">
        <mat-form-field>
            <input matInput type="email" placeholder="Email" [formControl]="emailFormControl"
                required [errorStateMatcher]="matcher">
            <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
                Please enter a valid email address
            </mat-error>
            <mat-error *ngIf="emailFormControl.hasError('required')">
                Email is <strong>required</strong>
            </mat-error>
        </mat-form-field>

        <mat-form-field>
            <input matInput type="password" [formControl]="passwordFormControl"
                placeholder="Password" required [errorStateMatcher]="matcher" >
            <mat-error *ngIf="passwordFormControl.hasError('required')">
                Password is <strong>required</strong>
            </mat-error>
        </mat-form-field>
    </mat-card-content>
    <mat-card-actions>
        <div style="display: flex;justify-content: flex-end;">
            <button mat-button>Forgot Password</button>
            <button mat-button>Reset</button>
            <button mat-raised-button (click)="onLogin()">Log In</button>
        </div>
        <mat-divider style="margin: 8px 0;"></mat-divider>
        <div style="margin-top: 16px;display: flex;justify-content: center;">
            <button style="margin: 0 8px 0 0;" mat-button (click)="signInWithGoogle()">Log In using Google</button>
            <button style="margin: 0 0 0 8px;" mat-button (click)="signInWithFaceBook()">Log In using Facebook</button>
        </div>
    </mat-card-actions>
</mat-card>
</div>
  `,
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
        private userService: UserService) { }

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

    }
    signOut(): void {
        this.authService.signOut();
    }
}
