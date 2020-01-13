import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-contactus',
    template: `
    <div class="example-container">
        <h1>Contact Us</h1>
        <mat-form-field>
            <input matInput placeholder="Name">
        </mat-form-field>

        <mat-form-field>
            <input matInput placeholder="Email">
        </mat-form-field>

        <mat-form-field>
            <textarea matInput placeholder="Comments"></textarea>
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
            width: 70%;
        }
      `
    ]
})
export class ContactUsComponent {
}
