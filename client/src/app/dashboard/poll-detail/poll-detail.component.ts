import { MdSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';

import { IdentityService, PollService } from '../../shared/services';
import { Identity, Poll } from '../../shared/models';

@Component({
    templateUrl: './poll-detail.component.html',
    styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent implements OnInit {

    public poll: Poll;
    private selectedOption: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pollService: PollService,
        private mdSnackBar: MdSnackBar
    ) { }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: { poll: Poll }) => {
                this.poll = data.poll;
            });
    }

    public vote(): void {
        this.poll.votes[this.poll.options.indexOf(this.selectedOption)]++;
        this.pollService.put(this.poll._id, this.poll).subscribe(res => {
            this.mdSnackBar.open(`You voted ${this.selectedOption}`);
        });
    }
}
