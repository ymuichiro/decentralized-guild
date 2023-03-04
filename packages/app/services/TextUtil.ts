import markdownToTxt from 'markdown-to-text';

export class TextService {
  static trimText(text: string | undefined, trim: number): string | undefined {
    if (text === undefined) {
      return undefined;
    }
    if (text.length > trim) {
      return text.slice(0, trim) + '...';
    }
    return text;
  }

  static mdToText(markdown: string | undefined): string | undefined {
    if (markdown) {
      return markdownToTxt(markdown);
    }
    return '';
  }

  /** Download a file from the data */
  static download(filename: string, text: string): void {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const element = document.createElement('a');
    element.href = URL.createObjectURL(blob);
    element.target = '_blank';
    element.download = filename;
    element.click();
    URL.revokeObjectURL(element.href);
  }
}
