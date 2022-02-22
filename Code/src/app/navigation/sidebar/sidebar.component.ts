import { Component, OnInit, Output, EventEmitter, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ExpenseState } from 'src/app/store/expense.reducer';
import { Store } from '@ngrx/store';
import * as expenseActions from './../../store/expense.action';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @Output() sidenavClickEvent = new EventEmitter<void>();
  @Output() sidenavLoadEvent = new EventEmitter<void>();

  constructor(private store: Store<ExpenseState>) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.sidenavLoadEvent.emit(),0);
  }

  onClick() {
    this.sidenavClickEvent.emit();
  }

}
