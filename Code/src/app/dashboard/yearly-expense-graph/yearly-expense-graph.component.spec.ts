import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { YearlyExpenseGraphComponent } from './yearly-expense-graph.component';

describe('YearlyExpenseGraphComponent', () => {
  let component: YearlyExpenseGraphComponent;
  let fixture: ComponentFixture<YearlyExpenseGraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlyExpenseGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyExpenseGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
