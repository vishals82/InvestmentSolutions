import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../myErrorStateMatcher';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.html',
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

    constructor(private router: Router) { }

    onRegistration() {
        this.router.navigate(['./home']);
    }
    onReset() {
        this.nameFormControl.setValue('');
        this.emailFormControl.setValue('');
        this.passwordFormControl.setValue('');
        this.confirmPasswordFormControl.setValue('');
    }
}
