import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appReducer from './store/app.reducer';
import { AuthState } from './store/auth.reducer';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { FeedbackFormComponent } from './shared/feedback-form/feedback-form.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Expense Tracker';
  @ViewChild('sidenav') sidenav: MatSidenav;
  sidenavMode: string;

  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<AuthState>,
              private matDialog: MatDialog,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(appReducer.getIsAuthenticated);
    this.authService.autoLogin();
  }

  onToggle(): void {
    if (this.sidenavMode === 'over'){
      this.sidenav.toggle();
    }
  }

  onSideNavLoad(): void {
    if (window.innerWidth >= 960) {
      this.sidenavMode = 'side';
      this.sidenav.open();    }
    else{
      this.sidenavMode = 'over';
    }
  }

  onResize(event): void {
    if (event.target.innerWidth < 960) {
      if (this.sidenav !== undefined) {
        this.sidenav.close();
        this.sidenavMode = 'over';
      }
    }
    if (event.target.innerWidth >= 960) {
      if (this.sidenav !== undefined) {
        this.sidenav.open();
        this.sidenavMode = 'side';
      }
    }
  }

  onClick(): void {
    this.matDialog.open(FeedbackFormComponent);
  }


}
