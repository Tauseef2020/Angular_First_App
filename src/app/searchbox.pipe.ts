import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbox'
})
export class SearchboxPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!args)
    {
      return value;
    }
    else{
      args = args.toUpperCase();
    }

    return value.filter (res => {
         return res.firstname.toUpperCase().startsWith(args) == true;
    })
  }

}
