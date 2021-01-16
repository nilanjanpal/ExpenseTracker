import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appReducer from '../../store/app.reducer';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/store/auth.reducer';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;
  constructor(private store: Store<AuthState>,
              private authService: AuthService) { }

  @Output() toggleSideBar = new EventEmitter<void>();

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(appReducer.getIsAuthenticated);
  }

  onLogout() {
    this.authService.logout();
  }

  onClick() {
    this.toggleSideBar.emit();
  }
}
