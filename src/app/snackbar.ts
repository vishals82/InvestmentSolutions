import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @title Basic snack-bar
 */
@Injectable({
    providedIn: 'root'
})
export class SnackBar {
    constructor(private _snackBar: MatSnackBar) { }

    show(message: string) {
        this._snackBar.open(message, 'OK', {
            duration: 4000,
        });
    }
}