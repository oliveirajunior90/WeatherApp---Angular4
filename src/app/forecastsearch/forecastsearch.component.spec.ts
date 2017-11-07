import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastsearchComponent } from './forecastsearch.component';

describe('ForecastsearchComponent', () => {
  let component: ForecastsearchComponent;
  let fixture: ComponentFixture<ForecastsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
