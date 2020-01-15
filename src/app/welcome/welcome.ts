import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    template: `
        <div style="text-align: center;">
            
            <h1>Welcome to SANADEEK</h1>
            <div class="m-16">INVEST WITH CONFIDENCE</div>

            <div>
                <img src="./assets/welcome.png" width="600px" alt="Welcome">
            </div>

            <div class="m-t-16">Helping you plan a bright future!</div>

            <a style="margin: 16px;" mat-raised-button routerLink="/questionair">Get Start</a>
    
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
        .m-16 {
            margin: 16px;
        }
      `
    ]
})
export class WelcomeComponent {
}
