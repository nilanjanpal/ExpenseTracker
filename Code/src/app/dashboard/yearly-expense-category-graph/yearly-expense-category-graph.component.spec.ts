import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyExpenseCategoryGraphComponent } from './yearly-expense-category-graph.component';

describe('YearlyExpenseCategoryGraphComponent', () => {
  let component: YearlyExpenseCategoryGraphComponent;
  let fixture: ComponentFixture<YearlyExpenseCategoryGraphComponent>;

  beforeEach(async(() => {
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
