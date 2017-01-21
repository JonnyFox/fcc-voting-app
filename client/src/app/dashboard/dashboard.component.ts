import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { IdentityService, PollService } from '../shared/services';
import { Identity, Poll } from '../shared/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public identity: Identity;
  public polls: Poll[];

  public pollRows: number[];

  constructor(
    identitySvc: IdentityService,
    private pollService: PollService
  ) {
    this.identity = identitySvc.identity;
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.pollService.getAll().subscribe(res => {
      this.polls = res;
      this.updatePollRows(this.polls.length);
    });
  }

  add(): void {
    this.pollService.post({
      authorId: '1d',
      name: 'Jonny',
      options: ['1', '2', '3'],
      votes: [12, 2, 0]
    }).flatMap(res => this.pollService.getById(res)).subscribe(res => {
      this.polls.push(res);
      this.updatePollRows(this.polls.length);
    });
  }

  updatePollRows(pollsLenght: number): void {
    this.pollRows = [];
    for (let i = 0; i < Math.ceil(pollsLenght / 3); i++) {
      this.pollRows.push(i);
    }
  }
}
