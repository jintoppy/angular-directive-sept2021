import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterCount'
})
export class CharacterCountPipe implements PipeTransform {

  transform(value: string, convertToCaps: boolean = false): unknown {
    const totalChars = value.length;
    return `${convertToCaps ? value.toUpperCase() : value }(${totalChars})`;
  }

}
