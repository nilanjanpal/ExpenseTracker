import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { YearlyExpenseCategoryGraphComponent } from './yearly-expense-category-graph.component';

describe('YearlyExpenseCategoryGraphComponent', () => {
  let component: YearlyExpenseCategoryGraphComponent;
  let fixture: ComponentFixture<YearlyExpenseCategoryGraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlyExpenseCategoryGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyExpenseCategoryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
