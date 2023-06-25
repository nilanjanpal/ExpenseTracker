import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEquityComponent } from './active-equity.component';

describe('ActiveEquityComponent', () => {
  let component: ActiveEquityComponent;
  let fixture: ComponentFixture<ActiveEquityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveEquityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveEquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
