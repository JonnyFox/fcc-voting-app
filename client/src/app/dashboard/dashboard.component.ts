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
    private router: Router
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

  public delete(index: number): void {
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

  private updatePollRows(pollsLenght: number): void {
    this.pollRows = [];
    for (let i = 0; i < Math.ceil(pollsLenght / 3); i++) {
      this.pollRows.push(i);
    }
  }
}
