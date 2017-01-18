import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BaseService } from './base.service';
import { Poll } from './models';

@Injectable()
export class PollService extends BaseService<Poll> {
    constructor(protected http: Http) {
        super(http, 'http://localhost:8999/api/polls');
    }
}
