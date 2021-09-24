import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterCount'
})
export class CharacterCountPipe implements PipeTransform {

  transform(value: string, convertToCaps: boolean = false): string {
    const totalChars = value.length;
    return `${convertToCaps ? value.toUpperCase() : value }(${totalChars})`;
  }

}
