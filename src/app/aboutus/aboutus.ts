
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-aboutus',
    template: `
    <div class="example-container">
        <h1>Planning Futures</h1>
        <div>
            Since 1999, we have helped create programs and portfolios to meet long-term financial goals. Have questions about investments, taxes, retirement, and/or estate planning? One of our credentialed professionals would be glad to help. 
        </div>

        <div style="display: flex;">
            <span class="cont">
                <h3>
                A Proven Approach
                </h3>
                <div>
                We start by clarifying our fee structure and explaining the different ways we can help. Then we analyze your goals and compare them to your current portfolio. Then we recommend an investment strategy designed to meet your risk tolerance.
                </div>
            </span>
            <span class="cont">
                <h3>
                Why Us hah?
                </h3>
                <div>
                    Our team is comprised of people with different kinds of finance experience, but we all have this in common--a commitment to ethics and integrity. We’re all fully licensed and credentialed. And you can count on unbiased recommendations and impartial guidance.
                </div>
            </span>
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

        .cont {
            padding: 16px;
        }
      `
    ]
})
export class AboutUsComponent {
}
