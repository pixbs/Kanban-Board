import React from 'react';

export const DescriptionIcon = (props) => {
    const color = props.color
    const strokeWidth = props.strokeWidth || 1.5
    
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M20.003 3.997H3.997M20.003 7.998H3.997M20.003 12H3.997M20.003 16.002H3.997M12 20.003H3.997" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}