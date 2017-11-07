import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastcapitalComponent } from './forecastcapital.component';

describe('ForecastcapitalComponent', () => {
  let component: ForecastcapitalComponent;
  let fixture: ComponentFixture<ForecastcapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastcapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastcapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
