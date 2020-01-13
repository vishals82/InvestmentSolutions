import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    template: `
        <div style="text-align: center;">
            
            <h1>Welcome to Investment Solutions</h1>
            
            <div style="padding: 16px;">
                Ready to do more with your money? It’s easy with Investment Solutions. 
                We help you make informed decisions, get invested, and know exactly where you stand.
            <div>

            <div style="padding-top: 16px;">
                <h3>Enjoy zero commission trades</h3>
                
                <div>It’s here! Online stock, ETF, and options trades are now commission-free from #1 Online Broker for 2020.</div>

            </div>
        </div>

        <a style="margin: 16px;" mat-raised-button routerLink="/questionair">Get Start</a>

        <div class="card-container">
        <mat-card class="example-card">
            <mat-card-header>
                <div mat-card-avatar class="example-header-image"></div>
                <mat-card-title>Shiba Inu</mat-card-title>
                <mat-card-subtitle>Dog Breed</mat-card-subtitle>
            </mat-card-header>
            <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
            <mat-card-content>
                <p>
                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
                bred for hunting.
                </p>
            </mat-card-content>
            <mat-card-actions>
                <button mat-button>LIKE</button>
                <button mat-button>SHARE</button>
            </mat-card-actions>
        </mat-card>

        <mat-card class="example-card">
            <mat-card-header>
                <div mat-card-avatar class="example-header-image"></div>
                <mat-card-title>Shiba Inu</mat-card-title>
                <mat-card-subtitle>Dog Breed</mat-card-subtitle>
            </mat-card-header>
            <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
            <mat-card-content>
                <p>
                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
                bred for hunting.
                </p>
            </mat-card-content>
            <mat-card-actions>
                <button mat-button>LIKE</button>
                <button mat-button>SHARE</button>
            </mat-card-actions>
        </mat-card>
        </div>

  `,
    styles: [
        `
        .card-container {
            display: flex;
            flex-direction: row;
        }
        .example-card {
            max-width: 400px;
            margin: 8px;
        }
        .example-header-image {
            background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
            background-size: cover;
        }
      `
    ]
})
export class WelcomeComponent {
}
