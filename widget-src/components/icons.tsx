const { widget } = figma
const { SVG } = widget

const SVGWrapper = (props : SVGProps) => {
    return (
        <SVG 
            src={props.src}
            width={props.width}
            height={props.height}
            tooltip={props.tooltip}
            hoverStyle={props.hoverStyle}
        />
    )
}

export const DescriptionIcon = (props : Partial<SVGProps>) => {

    const src = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="${props.fill}" stroke-linecap="round" stroke-linejoin="round" stroke-width="${props.strokeWidth}" d="M20.003 3.997H3.997M20.003 7.998H3.997M20.003 12H3.997M20.003 16.002H3.997M12 20.003H3.997"/>
    </svg>
    `

    return (
        <SVGWrapper src={src} {...props}/>
    )
}

export const TimeIcon = (props : Partial<SVGProps>) => {

    const src = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="${props.fill}" stroke-linecap="round" stroke-linejoin="round" stroke-width="${props.strokeWidth}" d="M8.557 3.687a8.998 8.998 0 0 1 11.756 4.87 8.998 8.998 0 0 1-4.87 11.756A8.998 8.998 0 1 1 8.557 3.687"/>
    <path stroke="${props.fill}" stroke-linecap="round" stroke-linejoin="round" stroke-width="${props.strokeWidth}" d="M11.718 7.985v4.651l3.656 2.23"/>
    </svg>
    `

    return (
        <SVGWrapper src={src} {...props}/>
    )
}

export const PlusIcon = (props : Partial<SVGProps>) => {
    
        const src = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="${props.fill}" stroke-linecap="round" stroke-linejoin="round" stroke-width="${props.strokeWidth}" d="M12 4v16m8-8H4"/>
        </svg>
        `
    
        return (
            <SVGWrapper src={src} {...props}/>
        )
}