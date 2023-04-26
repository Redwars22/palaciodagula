export type IInput = {
  type:
    | "text"
    | "password"
    | "checkbox"
    | "radio"
    | "number"
    | "date"
    | "color"
    | "tel"
    | "url"
    | "time"
    | "datetime-local"
    | "range"
  name?: string;
  showLabel?: boolean;
  label?: string;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  min?: number;
  max?: number;
  autoFocus?: boolean;
  width?: number;
  title?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
