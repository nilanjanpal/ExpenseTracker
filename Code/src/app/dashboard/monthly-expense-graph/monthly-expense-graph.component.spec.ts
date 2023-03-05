import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MonthlyExpenseGraphComponent } from './monthly-expense-graph.component';

describe('MonthlyExpenseGraphComponent', () => {
  let component: MonthlyExpenseGraphComponent;
  let fixture: ComponentFixture<MonthlyExpenseGraphComponent>;

  beforeEach(waitForAsync(() => {
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
