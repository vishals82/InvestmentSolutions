
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../myErrorStateMatcher';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contactus',
    templateUrl: './contactus.html',
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
export class ContactUsComponent {

    nameFormControl = new FormControl('', [
        Validators.required
    ]);
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    commentsFormControl = new FormControl('');

    matcher = new MyErrorStateMatcher();

    constructor(private router: Router) {}

    onSubmit() {
        this.router.navigate(['./home']);
    }
}

