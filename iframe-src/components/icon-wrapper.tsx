import React from 'react';
import { useState } from 'react';
import type CSS from 'node_modules/csstype/index.d.ts'

export function IconWrapper(props) : JSX.Element {
    const icon : JSX.Element = props.icon
    const children : JSX.Element = props.children

    return (
        <div style={style}>
            {icon}
            <div style={wrapperStyle}>
            {children}
            </div>
        </div>
    )
}

const style : CSS.Properties = {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
}

const wrapperStyle : CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
}