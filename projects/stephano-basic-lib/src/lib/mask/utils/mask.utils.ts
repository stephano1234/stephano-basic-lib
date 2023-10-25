export class MaskUtils {

  public static getInputResult(
    currentValue: string,
    selectionStart: number,
    selectionEnd: number,
    input: string | null,
    inputType: string,
  ): { input: string, select: number } {
    input ??= '';
    if (
      inputType === 'deleteContentBackward' &&
      selectionStart >= 1 &&
      selectionStart === selectionEnd
    ) {
      return {
        input: MaskUtils.insertInput(currentValue, selectionStart - 1, selectionEnd, input),
        select: selectionStart - 1,
      };
    }
    if (
      inputType === 'deleteContentForward' &&
      selectionStart === selectionEnd
    ) {
      return {
        input: MaskUtils.insertInput(currentValue, selectionStart, selectionEnd + 1, input),
        select: selectionStart,
      };
    }
    return {
      input: MaskUtils.insertInput(currentValue, selectionStart, selectionEnd, input),
      select: input && selectionStart === selectionEnd ? selectionStart + 1 : selectionStart,
    };
  }

  private static insertInput(
    currentValue: string,
    selectionStart: number,
    selectionEnd: number,
    input: string,
  ): string {
    return `${currentValue.slice(0, selectionStart)}${input}${currentValue.slice(selectionEnd)}`;
  }

}
