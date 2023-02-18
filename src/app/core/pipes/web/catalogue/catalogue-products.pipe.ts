import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catalogueProducts'
})
export class CatalogueProductsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
