import { IIcon } from "./icon";
import React from "react";

export default function Icon(props: IIcon) {
    return (<i className={`bi bi-${props.icon}`} style={{ fontSize: props.size, color: props.color, ...props.customCSS }}></i>);
}