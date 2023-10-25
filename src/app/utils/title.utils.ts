export class TitleUtils {

  private static readonly TITLE = 'Stephano Basic Library';

  public static getTitle(): string {
    return TitleUtils.TITLE;
  }

  public static getUnselectedComponentTitle(): string {
    return `${TitleUtils.getTitle()}: Components`;
  }

  public static getSelectedComponentTitle(component: string): string {
    return `${TitleUtils.getUnselectedComponentTitle()}: ${component}`;
  }

  public static getUnselectedDirectiveTitle(): string {
    return `${TitleUtils.getTitle()}: Directives`;
  }

  public static getSelectedDirectiveTitle(directive: string): string {
    return `${TitleUtils.getUnselectedDirectiveTitle()}: ${directive}`;
  }

  public static getUnselectedPipeTitle(): string {
    return `${TitleUtils.getTitle()}: Pipes`;
  }

  public static getSelectedPipeTitle(pipe: string): string {
    return `${TitleUtils.getUnselectedPipeTitle()}: ${pipe}`;
  }

}
