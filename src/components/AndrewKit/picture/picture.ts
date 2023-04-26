export interface IPicture {
    source: string;
    alt: string;
    title?: string;
    width?: string;
    height?: string;
    customCSS?: React.CSSProperties | undefined | null;
  }