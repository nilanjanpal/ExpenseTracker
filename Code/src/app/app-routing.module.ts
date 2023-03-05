import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'dashboard', 
   loadChildren: () => import('./child-route/dashboard-routing.module').then(m => m.DashboardRoutingModule)
  },
  { path: 'expense',
    loadChildren: () => import('./child-route/expense-routing.module').then(m => m.ExpenseRoutingModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./child-route/profile-routing.module').then(m => m.ProfileRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
