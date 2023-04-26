export interface ICard {
    background?: string;
    foreground?: string;
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    customCSS?: React.CSSProperties;
    hideBoxShadow?: boolean;
  }