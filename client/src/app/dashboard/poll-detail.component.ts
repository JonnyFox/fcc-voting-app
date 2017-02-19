import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Observer } from 'rxjs';

import { IdentityService, PollService } from '../shared/services';
import { Identity, Poll } from '../shared/models';

@Component({
  templateUrl: './poll-detail.component.html'
})
export class PollDetailComponent implements OnInit {

  public poll: Poll;

  constructor(
    private route: ActivatedRoute,
    private pollService: PollService
  ) { }

  ngOnInit(): void {
    this.route.data
      .subscribe((data: { poll: Poll }) => {
        this.poll = data.poll;
      });
  }
}
