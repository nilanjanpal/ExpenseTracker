import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../services/auth-guard.service';

const dashboardRoute: Routes = [
    {path: '', component: DashboardComponent, canActivate: [AuthGuard]}
]

@NgModule({
    imports: [RouterModule.forChild(dashboardRoute)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}