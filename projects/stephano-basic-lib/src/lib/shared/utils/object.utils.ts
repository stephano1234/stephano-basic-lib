export class ObjectUtils {

  public static getProperty(source: any, propertyPath: string): unknown {
    let destination = source;
    propertyPath.split('.')
      .forEach(direction => (typeof destination === 'object' && destination !== null) &&
        (destination = destination[direction])
      );
    return destination;
  }

}
