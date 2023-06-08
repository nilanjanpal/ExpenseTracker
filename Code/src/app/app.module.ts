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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './store/auth.reducer';
import { DashboardRoutingModule } from './child-route/dashboard-routing.module';
import { ExpenseRoutingModule } from './child-route/expense-routing.module';
import { ProfileRoutingModule } from './child-route/profile-routing.module';
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
import { NgApexchartsModule } from 'ng-apexcharts';
import { AnnualExpenseCategoryGraphComponent } from './dashboard/annual-expense-category-graph/annual-expense-category-graph.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor';
import { ToastrModule } from 'ngx-toastr';
import { LargeDeviceVersionDirective } from './directive/largeDeviceContent/large-device-version.directive';
import { SmallDeviceVersionDirective } from './directive/smallDeviceContent/small-device-version.directive';
import { HighlightDirective } from './directive/hoverContent/highlight.directive';
import { UserReducer } from './store/user.reducer';
import { AppReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './effects/authEffects';
import { UserEffect } from './effects/userEffects';
import { ProfileComponent } from './profile/profile.component';
import { InvestmentRoutingModuleModule } from './child-route/investment-routing-module.module';
import { InvestmentComponent } from './investment/investment.component';
import { InvestmentHistoryComponent } from './investment/investment-history/investment-history.component';
import { NewInvestmentComponent } from './investment/new-investment/new-investment.component';
import { InsuranceHistoryComponent } from './investment/insurance/insurance-history/insurance-history.component';
import { NewInsuranceComponent } from './investment/insurance/new-insurance/new-insurance.component';
import { EquityHistoryComponent } from './investment/equity/equity-history/equity-history.component';
import { NewEquityComponent } from './investment/equity/new-equity/new-equity.component';
import { EquityComponent } from './investment/equity/equity.component';
import { InvestmentEffect } from './effects/investmentEffects';

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
    InvestmentComponent,
    DialogComponent,
    ProfileComponent,
    ExpenseTableComponent,
    ExpenseExpandPanelComponent,
    MonthlyExpenseGraphComponent,
    YearlyExpenseGraphComponent,
    YearlyExpenseCategoryGraphComponent,
    FeedbackFormComponent,
    AnnualExpenseCategoryGraphComponent,
    LoadingComponent,
    LargeDeviceVersionDirective,
    SmallDeviceVersionDirective,
    HighlightDirective,
    InvestmentHistoryComponent,
    NewInvestmentComponent,
    InsuranceHistoryComponent,
    NewInsuranceComponent,
    EquityHistoryComponent,
    NewEquityComponent,
    EquityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot(AuthEffect,UserEffect, InvestmentEffect),
    DashboardRoutingModule,
    ExpenseRoutingModule,
    ProfileRoutingModule,
    InvestmentRoutingModuleModule,
    ChartsModule,
    LayoutModule,
    NgApexchartsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
