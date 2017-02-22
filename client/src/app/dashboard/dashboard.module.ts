import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PollDetailComponent } from './poll-detail.component';
import { PollDetailResolver } from './shared/poll-detail-resolver.service';

import { PollService } from '../shared/services';

@NgModule({
    declarations: [
        DashboardComponent,
        PollDetailComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MaterialModule
    ],
    providers: [
        PollService,
        PollDetailResolver
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardModule { }
