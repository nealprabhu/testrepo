import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    value = value.substring(0, args);
    
    return value + "...   " + this.addCredit();
  }

  addCredit(){
    return "CreatedBy: Ellipsis Pipe";
  }

}
