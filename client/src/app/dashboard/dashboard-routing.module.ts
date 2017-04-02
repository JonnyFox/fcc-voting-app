import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { PollDetailResolver } from './shared/poll-detail-resolver.service';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'poll/:id',
        component: PollDetailComponent,
        resolve: {
            poll: PollDetailResolver
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }
