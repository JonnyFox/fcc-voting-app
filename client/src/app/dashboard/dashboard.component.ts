import { PollDialogResult } from './shared/poll-dialog-result';
import { PollDialogComponent } from './poll-dialog/poll-dialog.component';
import { MdDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';

import { IdentityService, PollService } from '../shared/services';
import { Poll } from '../shared/models';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public polls: Poll[];
    public pollRows: number[];

    constructor(
        private pollService: PollService,
        private router: Router,
        private dialogService: MdDialog,
        private identitySvc: IdentityService
    ) { }

    ngOnInit(): void {
        this.refresh();
    }

    private refresh(): void {
        this.pollService.getAll().subscribe(res => {
            this.polls = res;
            this.updatePollRows(this.polls.length);
        });
    }

    public add(): void {
        let pollDialog = this.dialogService.open(PollDialogComponent);
        pollDialog.afterClosed().subscribe((res: PollDialogResult) => {
            if (res && res.name !== '' && res.options.length > 1) {
                let poll = {
                    authorId: this.identitySvc.identity.id,
                    name: res.name,
                    options: res.options,
                    votes:  res.options.map(v => 0)
                };

                this.pollService.post(poll)
                    .flatMap(res => this.pollService.getById(res))
                    .subscribe(res => {
                        this.polls.push(res);
                        this.updatePollRows(this.polls.length);
                    });
            }
        });
    }

    public delete(event: Event, index: number): void {
        event.stopPropagation();
        this.pollService.delete(this.polls[index]._id)
            .subscribe(res => {
                this.polls.splice(index, 1);
            });
    }

    public goToDetail(index: number): void {
        this.router.navigate([`./poll/${this.polls[index]._id}`]);
    }

    public pollUrl(index: number): string {
        return `poll/${this.polls[index]._id}`;
    }

    public getPollVotes(poll: Poll) { 
        return poll.votes ? poll.votes.reduce((acc, v) => acc + v) : 0;
    }

    private updatePollRows(pollsLenght: number): void {
        this.pollRows = [];
        for (let i = 0; i < Math.ceil(pollsLenght / 3); i++) {
            this.pollRows.push(i);
        }
    }
}
