import React from "react";
import { ICard } from "./card";
import "./card.css";

export default function Card(props: ICard) {
    return (
      <div
      className={`andrewkit-card${props.hideBoxShadow ? "-without-outline" : ""}`}
        style={{
          backgroundColor: props.background,
          color: props.foreground,
          ...props.customCSS,
        }}
      >
        {props.header && (
          <div>
            {props.header}
            <hr className="andrewkit-card-separator" />
          </div>
        )}
        {props.children}
        {props.footer && (
          <div>
            <hr className="andrewkit-card-separator" />
            {props.footer}
          </div>
        )}
      </div>
    );
  }
  