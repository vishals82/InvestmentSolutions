import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-questionair',
    template: `
        <mat-vertical-stepper [linear]="isLinear" #stepper>
            <mat-step [stepControl]="firstFormGroup">
                <form [formGroup]="firstFormGroup">
                <ng-template matStepLabel>Fill out your name</ng-template>
                <mat-form-field>
                    <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
                </mat-form-field>
                <div>
                    <button mat-raised-button matStepperNext>Next</button>
                </div>
                </form>
            </mat-step>
            <mat-step [stepControl]="secondFormGroup">
                <form [formGroup]="secondFormGroup">
                <ng-template matStepLabel>Fill out your address</ng-template>
                <mat-form-field>
                    <input matInput placeholder="Address" formControlName="secondCtrl" required>
                </mat-form-field>
                <div>
                    <button mat-raised-button matStepperPrevious>Back</button>
                    <button mat-raised-button matStepperNext>Next</button>
                </div>
                </form>
            </mat-step>
            <mat-step [stepControl]="thirdFormGroup">
                <form [formGroup]="thirdFormGroup">
                <ng-template matStepLabel>Risk</ng-template>
                <mat-form-field>
                    <input matInput placeholder="Risk" formControlName="thirdCtrl" required>
                    <mat-radio-group aria-label="Select an option">
                        <mat-radio-button value="1">High</mat-radio-button>
                        <mat-radio-button value="2">Low</mat-radio-button>
                    </mat-radio-group>
                </mat-form-field>
                <div>
                    <button mat-raised-button matStepperPrevious>Back</button>
                    <button mat-raised-button matStepperNext>Next</button>
                </div>
                </form>
            </mat-step>
            <mat-step>
                <ng-template matStepLabel>Done</ng-template>
                You are now done.
                <div style="padding-top: 32px;">
                    <button mat-raised-button matStepperPrevious>Back</button>
                    <button mat-raised-button routerLink="/report">Submit</button>
                </div>
            </mat-step>
        </mat-vertical-stepper>
  `,
    styles: [
        `
         .mat-raised-button {
             margin: 5px 5px;
         }
      `
    ]
})
export class QuestionairComponent {
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', Validators.required]
        });
    }
}
