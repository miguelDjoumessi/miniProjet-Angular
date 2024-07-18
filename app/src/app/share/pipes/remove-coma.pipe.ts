import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: 'replaceComma'
})

export class ReplaceCommaPipe implements PipeTransform{
    transform(value: string){
        if(value != null){
            return value.replace(/./g, ',');
        }else{
            return '';
        }
    }
}