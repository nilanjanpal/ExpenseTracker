import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseComponent } from './expense/expense.component';
import { EditExpenseComponent } from './expense/edit-expense/edit-expense.component';
import { NewExpenseComponent } from './expense/new-expense/new-expense.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './store/auth.reducer';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DashboardRoutingModule } from './child-route/dashboard-routing.module';
import { ExpenseRoutingModule } from './child-route/expense-routing.module';
import { ExpenseReducer } from './store/expense.reducer';
import { ExpenseHistoryComponent } from './expense/expense-history/expense-history.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { ExpenseTableComponent } from './expense/expense-history/expense-table/expense-table.component';
import { ExpenseExpandPanelComponent } from './expense/expense-history/expense-expand-panel/expense-expand-panel.component';
import { DashboardReducer } from './store/dashboard.reducer';
import { MonthlyExpenseGraphComponent } from './dashboard/monthly-expense-graph/monthly-expense-graph.component';
import { YearlyExpenseGraphComponent } from './dashboard/yearly-expense-graph/yearly-expense-graph.component';
import { YearlyExpenseCategoryGraphComponent } from './dashboard/yearly-expense-category-graph/yearly-expense-category-graph.component';
import { ChartsModule } from 'ng2-charts';
import { LayoutModule } from '@angular/cdk/layout';
import { FeedbackFormComponent } from './shared/feedback-form/feedback-form.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ExpenseComponent,
    EditExpenseComponent,
    NewExpenseComponent,
    ExpenseHistoryComponent,
    DialogComponent,
    ExpenseTableComponent,
    ExpenseExpandPanelComponent,
    MonthlyExpenseGraphComponent,
    YearlyExpenseGraphComponent,
    YearlyExpenseCategoryGraphComponent,
    FeedbackFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({auth: AuthReducer, expense: ExpenseReducer, dashboard: DashboardReducer}),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    DashboardRoutingModule,
    ExpenseRoutingModule,
    ChartsModule,
    LayoutModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
