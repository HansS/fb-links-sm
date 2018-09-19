import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkFilter'
})
export class LinkFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
