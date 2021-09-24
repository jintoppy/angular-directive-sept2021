import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: string, charCount:number): unknown {
    console.log(charCount);
    return value.split('-')[0].slice(0,charCount);
  }

}
