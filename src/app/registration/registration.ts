import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../myErrorStateMatcher';

@Component({
    selector: 'app-registration',
    template: `
<div class="example-container">
<mat-card class="example-card">
    <mat-card-header>
        <mat-card-title>Register</mat-card-title>
    </mat-card-header>
    <mat-card-content style="display: flex; flex-direction: column;">

        <mat-form-field>
            <input matInput type="text" placeholder="Name" [formControl]="nameFormControl"
                required [errorStateMatcher]="matcher">
            <mat-error *ngIf="nameFormControl.hasError('required')">
                Name is <strong>required</strong>
            </mat-error>
        </mat-form-field>

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

        <mat-form-field>
            <input matInput type="password" [formControl]="confirmPasswordFormControl"
                placeholder="Confirm password" required [errorStateMatcher]="matcher" >
            <mat-error *ngIf="confirmPasswordFormControl.hasError('required')">
                Password is <strong>required</strong>
            </mat-error>
        </mat-form-field>
    </mat-card-content>
    <mat-card-actions>
        <div style="display: flex;justify-content: flex-end;">
            <button mat-button>Reset</button>
            <button mat-raised-button (click)="onRegistration()">Register</button>
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
export class RegistrationComponent {

    nameFormControl = new FormControl('', [
        Validators.required
    ]);
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required
    ]);
    confirmPasswordFormControl = new FormControl('', [
        Validators.required
    ]);

    matcher = new MyErrorStateMatcher();

    onRegistration() {

    }
}
