import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"mayus"
})
export class MayusculasPipe implements PipeTransform{

    transform(arg : string, arg2 : boolean = true) : string {
        return arg2 ? arg.toUpperCase() : arg.toLowerCase()
    }

}