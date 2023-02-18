import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seacrhProdcts'
})
export class SeacrhProdctsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
