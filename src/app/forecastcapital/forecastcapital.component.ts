import { Component, OnInit, Input, Output, AfterViewInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Forecast } from '../model/forecast.interface';

@Component({
  selector: 'app-forecastcapital',
  templateUrl: './forecastcapital.component.html',
  styleUrls: ['./forecastcapital.component.scss']
})
export class ForecastcapitalComponent {

  public forecast = [];
  public capital : string;

  capitais : Array<string> = [
    'Rio de Janeiro', 
    'São Paulo', 
    'Belo Horizonte',
    'Brasília',
    'Belém', 
    'Salvador', 
    'Curitiba', 
    'Fortaleza', 
    'Manaus', 
    'João Pessoa'
  ];
  
  constructor(private weatherService : WeatherService ) { 
    
    this.capitais.forEach(element => {
      this.getCapital(element);
    });

  }

  getCapital(city : string) {
     
    this.weatherService.getCapital(city)
    .subscribe((res : Forecast) => {

      this.forecast.push({
        city: city, forecast:res[0].item.forecast
      });
    })

    
    
  }
  

}
