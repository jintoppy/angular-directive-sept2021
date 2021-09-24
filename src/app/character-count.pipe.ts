import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterCount'
})
export class CharacterCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
