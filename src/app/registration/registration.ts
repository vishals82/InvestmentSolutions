import { Component } from '@angular/core';

@Component({
    selector: 'app-registration',
    template: `
    <div class="example-container">
        <h1>Register</h1>
        <mat-form-field>
            <input matInput placeholder="Name">
        </mat-form-field>

        <mat-form-field>
            <input matInput placeholder="Email">
        </mat-form-field>

        <mat-form-field>
            <input matInput placeholder="Password">
        </mat-form-field>

        <mat-form-field>
            <input matInput placeholder="Confirm Password">
        </mat-form-field>

        <div style="margin-top: 16px;">
            <button mat-raised-button>Submit</button>
        </div>
    </div>
  `,
  styles: [
      `
      .example-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .example-container > * {
        width: 60%;
      }
      `
  ]
})
export class RegistrationComponent {
}
