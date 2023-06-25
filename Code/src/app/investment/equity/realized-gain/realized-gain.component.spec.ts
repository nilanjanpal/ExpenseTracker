import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizedGainComponent } from './realized-gain.component';

describe('RealizedGainComponent', () => {
  let component: RealizedGainComponent;
  let fixture: ComponentFixture<RealizedGainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizedGainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizedGainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
