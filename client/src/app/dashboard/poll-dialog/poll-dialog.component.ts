import { MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-poll-dialog',
    templateUrl: './poll-dialog.component.html',
    styleUrls: ['./poll-dialog.component.scss']
})
export class PollDialogComponent {
    public pollName: string;

    constructor(private dialogRef: MdDialogRef<PollDialogComponent>) { }

    public add(): void {
        this.dialogRef.close(this.pollName);
    }

    public cancel(): void {
        this.dialogRef.close();
    }
}
