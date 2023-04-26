import React from "react";
import { IPicture } from "./picture";
import "./picture.css";

export default function Picture(props: IPicture) {
    return (
        <div>
            <img
                className="andrewkit-picture"
                src={props.source}
                alt={props.alt}
                title={props.title}
                width={props.width}
                height={props.height}
                style={{
                    ...props.customCSS
                }}
            ></img>
        </div>
    );
}