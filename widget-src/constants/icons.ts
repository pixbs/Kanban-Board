export const descriptionIconSrc = (color : string) => {
    return (`
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M20.003 3.997H3.997M20.003 7.998H3.997M20.003 12H3.997M20.003 16.002H3.997M12 20.003H3.997" stroke="${color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `)
}

export const dateIconSrc = (color : string) => {
    return (`
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M8.557 3.687a8.998 8.998 0 0 1 11.756 4.87 8.998 8.998 0 0 1-4.87 11.756A8.998 8.998 0 1 1 8.557 3.687" stroke="${color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.718 7.985v4.651l3.656 2.229" stroke="${color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `)
}