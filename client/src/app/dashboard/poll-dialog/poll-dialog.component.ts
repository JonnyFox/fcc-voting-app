import { MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-poll-dialog',
    templateUrl: './poll-dialog.component.html',
    styleUrls: ['./poll-dialog.component.scss']
})
export class PollDialogComponent {
    public pollName: string;
    public options: string;

    constructor(private dialogRef: MdDialogRef<PollDialogComponent>) { }

    public add(): void {
        const optionsArray = this.options.split(',');
        this.dialogRef.close({ name: this.pollName, options: optionsArray });
    }

    public cancel(): void {
        this.dialogRef.close();
    }
}
