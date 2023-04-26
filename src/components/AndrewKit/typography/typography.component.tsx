import React from "react";
import { ITypography } from "./typography";
import { typographySizes } from "../ui/constants";

export default function Typography(props: ITypography) {
    return (
        <span
            style={{
                fontSize: typographySizes[props.variant],
                fontWeight: props.variant !== 'paragraph' ? 'bold' : props.fontWeight,
                color: props.color,
                ...props.customCSS,
            }}
        >
            {props.children}
        </span>
    );
}