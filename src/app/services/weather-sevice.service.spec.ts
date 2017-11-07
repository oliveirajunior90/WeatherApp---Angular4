import { TestBed, inject } from '@angular/core/testing';

import { WeatherSeviceService } from './weather-sevice.service';

describe('WeatherSeviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherSeviceService]
    });
  });

  it('should be created', inject([WeatherSeviceService], (service: WeatherSeviceService) => {
    expect(service).toBeTruthy();
  }));
});
