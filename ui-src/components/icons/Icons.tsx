import React from 'react';
let root = document.querySelector(':root')
if (!root) throw new Error('Root element not found')
let computedStyle = getComputedStyle(root)
let color = computedStyle.getPropertyValue('--figma-color-icon')

export const TitleIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.95001 5H20.12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 17V5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 17V10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 10H10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const DescriptionIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.0033 3.99679H3.99664" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.0033 7.99826H3.99664" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.0033 12.0002H3.99664" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.0033 16.0017H3.99664" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 20.0036H3.99664" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const LinkIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12H16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.611 16H7.25C4.903 16 3 14.097 3 11.75V11.75C3 9.403 4.903 7.5 7.25 7.5H9.611" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.389 16H16.75C19.097 16 21 14.097 21 11.75V11.75C21 9.403 19.097 7.5 16.75 7.5H14.389" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const UnlinkIcon = () => {
    return (
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.43 14.57H21M14.57 21v-2.57M19.39 19.39l-1.93-1.93M5.57 9.43H3M9.43 3v2.57M4.61 4.61l1.93 1.93M12.643 16.013l-2.133 2.133a3.237 3.237 0 0 1-4.578 0v0a3.237 3.237 0 0 1 0-4.578l2.133-2.133M11.412 8.01l2.133-2.133a3.237 3.237 0 0 1 4.578 0v0a3.237 3.237 0 0 1 0 4.578l-2.133 2.133" stroke={color} stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const CaretDownIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16">
        <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.333 6.667 8 9.334l2.667-2.667"/>
        </svg>
    )
}

export const NextIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16">
        <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.667 8H3.333M9.333 11.333 12.667 8M9.333 4.667 12.667 8"/>
        </svg>
    )
}

export const LargeNextIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24">
        <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 12H6M13 16.333 18 12M13 7.667 18 12"/>
        </svg>
    )
}

export const TimeIcon = () => {
    return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.205 2.458a5.998 5.998 0 1 1 4.59 11.084 5.998 5.998 0 0 1-4.59-11.084" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.312 5.324v3.1l2.437 1.486" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )
}

export const RemoveIcon = () => {
    return (
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.333 4.667v8c0 .736-.597 1.333-1.333 1.333H5a1.333 1.333 0 0 1-1.333-1.334v-8M13.333 4.667H2.667" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.667 4.667v-.334A2.333 2.333 0 0 1 8 2v0a2.333 2.333 0 0 1 2.333 2.333v.334M6.667 10.667V8M9.333 10.667V8" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const UserIcon = () => {
    return (
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.333 13.333v-.5A2.833 2.833 0 0 0 10.5 10h-5a2.833 2.833 0 0 0-2.833 2.833v.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8" cy="4.667" r="2.667" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}