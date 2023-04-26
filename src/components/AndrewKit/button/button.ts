export interface IButton {
	title: string;
	hint?: string;
	appearance: "normal" | "danger" | "success" | "info" | "warning";
	icon?: string | undefined | null;
	action: () => void;
	ariaLabel?: string;
	disabled?: boolean;
}