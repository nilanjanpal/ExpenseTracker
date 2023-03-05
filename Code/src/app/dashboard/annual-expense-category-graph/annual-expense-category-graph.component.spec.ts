import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnnualExpenseCategoryGraphComponent } from './annual-expense-category-graph.component';

describe('AnnualExpenseCategoryGraphComponent', () => {
  let component: AnnualExpenseCategoryGraphComponent;
  let fixture: ComponentFixture<AnnualExpenseCategoryGraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualExpenseCategoryGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualExpenseCategoryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
