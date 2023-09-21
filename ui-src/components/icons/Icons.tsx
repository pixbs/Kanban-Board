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

export const TimeIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.4178 2.76501C9.86105 1.33851 13.8083 2.97426 15.2348 6.41751C16.6613 9.86076 15.0256 13.808 11.5823 15.2345C8.13905 16.661 4.1918 15.0253 2.7653 11.582C1.33955 8.13876 2.97455 4.19151 6.4178 2.76501" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.78857 5.98828V9.47653L11.5306 11.1483" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const RemoveIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 5.25H14.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.5 5.25V13.5C13.5 14.3288 12.8288 15 12 15H6C5.17125 15 4.5 14.3288 4.5 13.5V5.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.25 2.8125H6.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 8.25V12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5 8.25V12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}