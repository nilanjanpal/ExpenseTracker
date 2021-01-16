import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './../expense/expense.component';
import { NewExpenseComponent } from '../expense/new-expense/new-expense.component';
import { EditExpenseComponent } from '../expense/edit-expense/edit-expense.component';
import { AuthGuard } from '../services/auth-guard.service';

const expenseRoutes: Routes = [
    {path: '', component: ExpenseComponent, children:[
        {path: 'new', component: NewExpenseComponent},
        {path: 'edit/:id', component: EditExpenseComponent}
    ] , canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(expenseRoutes)],
    exports: [RouterModule]
})
export class ExpenseRoutingModule {}