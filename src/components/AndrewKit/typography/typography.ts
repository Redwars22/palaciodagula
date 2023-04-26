export type ITypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'paragraph';

  export type ITypography = {
    variant: ITypographyVariants;
    fontWeight?: number;
    children: React.ReactNode;
    color?: string;
    customCSS?: React.CSSProperties;
  };