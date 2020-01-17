
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-aboutus',
    template: `
    <div class="example-container">
    <mat-card class="example-card">
        <mat-card-header>
            <mat-card-title>Planning Futures</mat-card-title>
        </mat-card-header>
        <mat-card-content>
        <p>
            Since 1999, we have helped create programs and portfolios to meet long-term financial goals. Have questions about investments, taxes, retirement, and/or estate planning? One of our credentialed professionals would be glad to help.
        </p>
        </mat-card-content>
    </mat-card>

    <div style="display: flex;margin-top: 16px;">
        <mat-card class="example-card">
            <mat-card-header>
                <mat-card-title>A Proven Approach</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <p>
                We start by clarifying our fee structure and explaining the different ways we can help. Then we analyze your goals and compare them to your current portfolio. Then we recommend an investment strategy designed to meet your risk tolerance.
                </p>
            </mat-card-content>
        </mat-card>

        <mat-card class="example-card">
            <mat-card-header>
                <mat-card-title>Why Us hah?</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <p>
                Our team is comprised of people with different kinds of finance experience, but we all have this in common--a commitment to ethics and integrity. We’re all fully licensed and credentialed. And you can count on unbiased recommendations and impartial guidance.
                </p>
            </mat-card-content>
        </mat-card>
    </div>
    </div>
  `,
    styles: [
        `
        .example-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 16px 48px;
        }

        .example-card {
            margin: 0 16px;
        }
      `
    ]
})
export class AboutUsComponent {
}
