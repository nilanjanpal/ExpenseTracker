import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseExpandPanelComponent } from './expense-expand-panel.component';

describe('ExpenseExpandPanelComponent', () => {
  let component: ExpenseExpandPanelComponent;
  let fixture: ComponentFixture<ExpenseExpandPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseExpandPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseExpandPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
