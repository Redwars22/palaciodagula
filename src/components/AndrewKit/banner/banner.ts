export interface IBanner {
  title: string;
  type: 'warning' | 'info' | 'danger';
  children: React.ReactNode;
  customCSS?: React.CSSProperties;
}