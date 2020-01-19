import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.html',
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
