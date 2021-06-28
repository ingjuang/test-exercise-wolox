import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, arg: any) {
    if (arg === '' || arg.length < 3) return value;
    const reultFilter = [];
    for (const item of value) {
      if (
        item.tech.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        item.type.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        reultFilter.push(item);
      }
    }
    return reultFilter;
  }

}
