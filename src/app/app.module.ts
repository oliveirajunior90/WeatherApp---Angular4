import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from './services/weather.service';
import { ForecastcapitalComponent } from './forecastcapital/forecastcapital.component';
import { ForecastsearchComponent } from './forecastsearch/forecastsearch.component';
import { FahrenheittocelsiusPipe } from './pipes/fahrenheittocelsius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ForecastcapitalComponent,
    ForecastsearchComponent,
    FahrenheittocelsiusPipe,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
