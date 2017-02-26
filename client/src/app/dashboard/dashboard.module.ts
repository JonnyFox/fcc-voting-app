import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PollDetailComponent } from './poll-detail.component';
import { PollDetailResolver } from './shared/poll-detail-resolver.service';

import { PollService } from '../shared/services';
import { PollDialogComponent } from "./poll-dialog/poll-dialog.component";

@NgModule({
    declarations: [
        DashboardComponent,
        PollDetailComponent,
        PollDialogComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MaterialModule,
        FormsModule
    ],
    providers: [
        PollService,
        PollDetailResolver
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [PollDialogComponent]
})
export class DashboardModule { }
