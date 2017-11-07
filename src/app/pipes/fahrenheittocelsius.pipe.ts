import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrenheittocelsius'
})
export class FahrenheittocelsiusPipe implements PipeTransform {

  transform(value: number, args?: number): number {
    if(!value) return value;
    //T(°C) = (T(°F) - 32) × 5/9
    value = (value - 32) * 5/9;
    var val = value.toFixed(0);
    
    return Number(val);
  }

}
