import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(item: any[], searchtext:string,fieldname:string): any []{
   if(!item) 
   return [];
   if(!searchtext) 
   return item;
   searchtext=searchtext.toLowerCase();

  return item.filter(item=>{
    if(item && item[fieldname]){
      return item [fieldname].toLowerCase().includes(searchtext);
    }
  });
  }

}
