import { Component } from '@angular/core';

@Component({
    selector: 'app-detail-report',
    template: `
        
        <div class="example-container">
            <mat-card class="example-card">
                <mat-card-header>
                <mat-card-title>Subscribe</mat-card-title>
                </mat-card-header>
                <mat-card-content style="display: flex; flex-direction: column;">
                    <mat-label> Subscription is required for detail report</mat-label>
                </mat-card-content>
                <mat-card-actions>
                <div style="display: flex;justify-content: flex-end;">
                    <button mat-raised-button (click)="openCheckout()">Subscribe</button>
                </div>
                </mat-card-actions>
            </mat-card>
        </div>

  `,
  styles: [
      `
      ::ng-deep .Modal {
          width: 480px;
      }
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
export class DetailReportComponent {
    title = 'header';

    openCheckout() {
        var handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_DLeOMg9gpfJRvFqBhkIxyvq600OhtAHjpI',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log('Stripe', token);
          }
        });
    
        handler.open({
          name: 'SANADEEK',
          description: 'Yearly subscription',
          amount: 20000
        });
      }
}
