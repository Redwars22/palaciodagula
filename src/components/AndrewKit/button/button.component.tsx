import React from "react";
import { colors } from "../ui/constants";
import { IButton } from "./button";
import "./button.css";

export default function Button(props: IButton) {
	const getBackgroundColor = () => colors[props.appearance];

	return (
		<button
			style={{
				backgroundColor: getBackgroundColor(),
				padding: "0.4rem",
				borderRadius: "0.3rem",
				color: props.appearance === "info" ? "black" : "white",
				fontWeight: "bold",
				border: "none",
				cursor: props.disabled ? "not-allowed" : "pointer",
				display: "flex",
				gap: "0.3rem",
			}}
			className={`andrewkit-button${props.disabled ? "-disabled" : ""}`}
			title={props.hint}
			onClick={() => props.action()}
			type={"button"}
			disabled={props.disabled ? true : false}
		>
			{props.icon && <i className={`bi bi-${props.icon}`}></i>}
			{props.title}
		</button>
	);
}
