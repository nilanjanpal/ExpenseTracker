import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityHistoryComponent } from './equity-history.component';

describe('EquityHistoryComponent', () => {
  let component: EquityHistoryComponent;
  let fixture: ComponentFixture<EquityHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquityHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquityHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
