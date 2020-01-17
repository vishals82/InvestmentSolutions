import { Component } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
    selector: 'app-report',
    template: `
        <div> REPORT SCREEN <div>
        <div>
            <div>
                <div style="display: block">
                <canvas baseChart
                    [data]="doughnutChartData"
                    [labels]="doughnutChartLabels"
                    [chartType]="doughnutChartType"
                    >
                </canvas>
                </div>
            </div>
        </div>
        <a style="margin: 16px;" mat-raised-button routerLink="/detail-report">Get Detailed report</a>
  `,
  styles: [
      `
      
      `
  ]
})
export class ReportComponent {
    public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: MultiDataSet = [
      [350, 450, 100],
      [50, 150, 120],
      [250, 130, 70],
    ];
    public doughnutChartType = 'doughnut';
  
    constructor() { }
  
    ngOnInit() {
    }
  
    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
}
