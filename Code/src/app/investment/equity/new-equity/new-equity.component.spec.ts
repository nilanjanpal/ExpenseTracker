import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEquityComponent } from './new-equity.component';

describe('NewEquityComponent', () => {
  let component: NewEquityComponent;
  let fixture: ComponentFixture<NewEquityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEquityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
