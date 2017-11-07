import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../model/weather.interface';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-forecastsearch',
  templateUrl: './forecastsearch.component.html',
  styleUrls: ['./forecastsearch.component.scss']
})
export class ForecastsearchComponent implements OnInit {

  private show : number;
  public city : Weather;
  public formulario : FormGroup;
  

  constructor(private weatherService : WeatherService, private formBuilder : FormBuilder){

  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      city: [null] 
    });
  }

  searchForecast() {
    let city = this.formulario.value.city;
    this.weatherService.getByCity(city).subscribe(res => {

      this.city = res; 
      this.show = 1;
      this.formulario.reset(); 

    });
     
  }

}
