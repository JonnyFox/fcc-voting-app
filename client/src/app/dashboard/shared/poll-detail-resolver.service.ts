import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { Poll } from '../../shared/models';
import { PollService } from '../../shared/services';

@Injectable()
export class PollDetailResolver implements Resolve<Poll> {
    constructor(private pollService: PollService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Poll> {
        return this.pollService.getById(route.params['id']);
    }
}