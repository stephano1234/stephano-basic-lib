import { Pipe, PipeTransform } from "@angular/core";
import { ObjectUtils } from "../utils/object.utils";

@Pipe({ name: 'getProperty' })
export class GetPropertyPipe implements PipeTransform {

  public transform(source: any, propertyPath: string | null): any {
    return propertyPath ? ObjectUtils.getProperty(source, propertyPath) : source;
  }

}
