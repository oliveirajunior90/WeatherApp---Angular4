import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Weather } from '../model/weather.interface';
import { Forecast } from '../model/forecast.interface';


@Injectable()
export class WeatherService {

  private BASE_URL = "http://query.yahooapis.com/v1/public/yql";

  constructor( private _http : Http) { }

  getByCity(city : string) : Observable<Weather> {
    //location, item.wind, item.condition, item.forecast
    var yql_query = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}")`;
    
    var url = `${this.BASE_URL}?q=${encodeURI(yql_query)}&format=json`;
  
    return this._http.get(url)
      .map((res : Response)  => res.json().query.results.channel)
      //.do(data => console.log(JSON.stringify(data)))
      .catch(this.handlerError)
    
     
  }
  
  getCapital(city:string) : Observable<Forecast> {
    var yql_query = `select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}")`;
  
    var url = `${this.BASE_URL}?q=${encodeURI(yql_query)}&format=json`;
 
    return this._http.get(url)
    .map((res : Response)  => res.json().query.results.channel)
    //.do(data => console.log(JSON.stringify(data)))
    .catch(this.handlerError)
  }

  getCelciusToFahrenheit(value : number) {
    //T(°C) = (T(°F) - 32) × 5/9
    return (value - 32) * (5/9);
  }

  private handlerError(error : Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
