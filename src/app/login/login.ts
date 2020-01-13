import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
    <div class="example-container">
        <h1>Log In</h1>
       
        <mat-form-field>
            <input matInput placeholder="Email">
        </mat-form-field>

        <mat-form-field>
            <input matInput placeholder="Password">
        </mat-form-field>
        
        <div style="margin-top: 16px;">
            <button mat-raised-button>Submit</button>
        </div>

        <div style="margin-top: 32px;">
            <button style="margin: 0 8px 0 0;" mat-raised-button>Log In using Google</button>
            <button style="margin: 0 0 0 8px;" mat-raised-button>Log In using Facebook</button>
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
export class LogInComponent {
}
