import { IInput } from "./input";
import React from "react";
import "./input.css";

export default function Input(props: IInput) {
    return (
        <div>
            <label>
                {props.showLabel &&
                    props.type !== 'checkbox' &&
                    props.type !== 'radio' && (
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.3rem',
                                fontSize: '0.75rem',
                                marginBottom: '-16px',
                            }}
                        >
                            <i className="bi bi-pencil-fill"></i>
                            <span>{props.label}</span>
                        </div>
                    )}
                <br />
                <input
                    type={props.type}
                    title={props.title}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    readOnly={props.readOnly}
                    min={props.min}
                    max={props.max}
                    autoFocus={props.autoFocus}
                    width={props.width}
                    required={props.required}
                    className={"andrewkit-input"}
                />
                {props.showLabel &&
                    (props.type === 'checkbox' || props.type === 'radio') && (
                        <span>{props.label}</span>
                    )}
            </label>
        </div>
    );
}