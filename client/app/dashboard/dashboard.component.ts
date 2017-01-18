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
  public polls: Observable<Poll[]>;

  constructor(
    identitySvc: IdentityService,
    private pollService: PollService
  ) {
    this.identity = identitySvc.identity;
  }

  ngOnInit(): void {
    this.refresh();
    let y = 9;
  }

  refresh(): void {
    this.polls = this.pollService.getAll();
  }

  add(): void {
    this.pollService.post({
      authorId: '1d',
      name: 'Jonny',
      options: ['1', '2', '3'],
      votes: [12, 2, 0]
    }).subscribe(res => {
      this.refresh();
    });
  }
}
