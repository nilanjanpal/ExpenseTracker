import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentComponent } from '../investment/investment.component';
import { AuthGuard } from '../services/auth-guard.service';

const investmentRoutes:Routes = [
  {path:'', component: InvestmentComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(investmentRoutes)
  ],
  exports: [RouterModule]
})
export class InvestmentRoutingModuleModule { }
