import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs-compat/operator/filter';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any , filterString: string , propName: string): any {
    console.log(value);
    if(value.length === 0 || filterString === '') return value;
    const resultArray = [];
    for( const item of value){
      if(item[propName] === filterString){
        console.log(item);
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
