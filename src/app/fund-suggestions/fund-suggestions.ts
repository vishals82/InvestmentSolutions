import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

export interface FundDetails {
    name: string;
    position: number;
    manager: string;
    objective: string;
    one_year_change?: number;
    three_year_change?: number;
    five_year_change?: number;
    ten_year_change?: number;
    change?: number;
}

const ELEMENT_DATA: FundDetails[] = [
    {
        position: 1,
        name: 'صندوق الراجحي للمضارببة بالبضائع بالدولار',
        manager: 'الراجحي المالية',
        objective: 'تنمية رأس المال',
        one_year_change: 2.43,
        three_year_change: 5.92,
        five_year_change: 8.44,
        ten_year_change: 13.58
    }, {
        position: 2,
        name: 'صندوق الراجحي لتنمية رأس المال و توزيع الأراح',
        manager: 'الراجحي المالية',
        objective: 'تنمية رأس المال',
        one_year_change: -1.92,
        three_year_change: 4.94,
        five_year_change: -22.08,
        ten_year_change: null
    }, {
        position: 3,
        name: 'صندوق الراحجي للأسهم السعودية للدخل',
        manager: 'الراجحي المالية',
        objective: 'نمو و الدخل',
        one_year_change: -1.48,
        three_year_change: 16,
        five_year_change: null,
        ten_year_change: null
    }, {
        position: 4,
        name: 'صندوق أراح الخليجي للسيولة',
        manager: 'أرباح المالية',
        objective: 'تنمية رأس المال',
        one_year_change: 4.33,
        three_year_change: null,
        five_year_change: null,
        ten_year_change: null
    }, {
        position: 5,
        name: 'صندوق إتقان للمرابحات و الصكوك',
        manager: 'إتقان كاببيتال',
        objective: 'المحافظة على رأس المال',
        one_year_change: 3.41,
        three_year_change: 8.86,
        five_year_change: 13.58,
        ten_year_change: 17.32
    }, {
        position: 6,
        name: 'صندوق الجزيرة للمرابحة بالدولار الأمريكي',
        manager: 'الجزيرة للأسواق المالية',
        objective: 'المحافظة على رأس المال'
    }, {
        position: 7,
        name: 'صندوق الخير كابيتال بلص للصكوك',
        manager: 'الخير كابيتال السعودية',
        objective: 'نمو و الدخل',
        one_year_change: 8.11,
        three_year_change: 8.67,
        five_year_change: 14.39,
        ten_year_change: null
    }, {
        position: 8,
        name: 'صندوق الخير كابيتال للطروحات الأولية',
        manager: 'الخير كابيتال السعودية',
        objective: 'نمو و الدخل',
        one_year_change: 6.7,
        three_year_change: -20.15,
        five_year_change: null,
        ten_year_change: null
    }, {
        position: 9,
        name: 'صندوق الخير كابيتال للمرابحة بالريال السعودي',
        manager: 'الخير كابيتال السعودية',
        objective: 'المحافظة على رأس المال',
        one_year_change: 2.79,
        three_year_change: 5.32,
        five_year_change: 9.64,
        ten_year_change: null
    }, {
        position: 10,
        name: 'صندوق الأسواق المالية بالدولار الأمريكي',
        manager: 'السعودي الفرنسي كابيتال',
        objective: 'المحافظة على رأس المال',
        one_year_change: 1.81,
        three_year_change: 4.35,
        five_year_change: 5.8,
        ten_year_change: 8.7
    },
]

@Component({
    selector: 'app-fund-suggestions',
    templateUrl: './fund-suggestions.html',
    styles: [
        `
      table {
          width: 100%;
          padding: 16px;
      }
      tr.mat-header-row {
          background-color: #1976d2;
      }
      th.mat-header-cell {
        color: white;
        font-size: medium;
      }
      th.mat-sort-header-sorted {
        color: white;
      }
      ::ng-deep .mat-sort-header-arrow {
        color: white;
      }
      tr.mat-row {
          color: black;
      }
      tr.mat-row:hover {
        background-color: #777;
        color: white;
      }
      td {
          color: inherit;
      }
      td.mat-cell {
        padding: 0 8px;
      }
      `
    ]
})
export class FundSuggestionsComponent {
    // displayedColumns: string[] = ['position', 'name', 'manager', 'objective', 'one_year_change', 'three_year_change', 'five_year_change', 'ten_year_change'];
    displayedColumns: string[] = [
        'ten_year_change', 'five_year_change', 'three_year_change',
        'one_year_change', 'objective', 'manager',    
        'name', 'position'        
        ];
    

    dataSource = new MatTableDataSource(ELEMENT_DATA);
    objectives = new FormControl();
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    objectiveList: string[] = [];

    ngOnInit() {
        this.dataSource.sort = this.sort;
        console.log('Enable sorting');
        this.objectiveList = [];

        ELEMENT_DATA.forEach(data => {
            if(!this.objectiveList.includes(data.objective)) {
                this.objectiveList.push(data.objective);
            }
        });

        this.objectives.valueChanges.subscribe(value => {
            // console.log('After Change', value);
            // let selectedValues = value.split(',');
            let data = ELEMENT_DATA.filter(e => value.includes(e.objective));
            this.dataSource.data = data;
        });
    }
}
