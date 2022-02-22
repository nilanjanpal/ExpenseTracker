import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyExpenseGraphComponent } from './monthly-expense-graph.component';

describe('MonthlyExpenseGraphComponent', () => {
  let component: MonthlyExpenseGraphComponent;
  let fixture: ComponentFixture<MonthlyExpenseGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyExpenseGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyExpenseGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
