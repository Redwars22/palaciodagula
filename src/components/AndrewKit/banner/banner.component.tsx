import React from 'react';
import {IBanner} from "./banner";
import {colorsFromTypeOfBanner, iconsFromTypeOfBanner} from "../ui/constants";
import "./banner.css";

export default function Banner(props: IBanner) {
  return (
    <div
      className="andrewkit-banner"
      style={{
        borderColor: colorsFromTypeOfBanner[props.type].border,
        borderRadius: '0.5rem',
        borderWidth: '0.1rem',
        borderStyle: 'solid',
      }}
    >
      <div
        className="andrewkit-banner-header"
        style={{
          backgroundColor: colorsFromTypeOfBanner[props.type].bg,
          borderTopLeftRadius: '0.4rem',
          borderTopRightRadius: '0.4rem',
          color: colorsFromTypeOfBanner[props.type].fg,
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        <i className={`bi bi-${iconsFromTypeOfBanner[props.type]}`} />
        {props.title}
      </div>
      <div className="andrewkit-banner-content" style={{ ...props.customCSS }}>
        {props.children}
      </div>
    </div>
  );
}
