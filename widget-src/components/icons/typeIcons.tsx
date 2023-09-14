import { typeIconProps } from "../../interfaces/props"

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

const TypeIcon = (props : typeIconProps) => {
    switch (props.type) {
        case 'WIDGET':
            return <WidgetIcon {...props}/>
        case 'COMPONENT':
        case 'COMPONENT_SET':
            return <ComponentIcon {...props}/> 
        case 'CONNECTOR':
            return <ConnectorIcon {...props}/>
        case 'ELLIPSE':
            return <EllipseIcon {...props}/>
        case 'FRAME':
            return <FrameIcon {...props}/>
        case 'GROUP':
            return <GroupIcon {...props}/>
        case 'INSTANCE':
            return <InstanceIcon {...props}/>
        case 'RECTANGLE':
            return <ReactangleIcon {...props}/>
        case 'SECTION':
            return <SectionIcon {...props}/>
        case 'SHAPE_WITH_TEXT':
            return <ShapeTextIcon {...props}/>
        case 'SLICE':
            return <SliceIcon {...props}/>
        case 'STAMP':
            return <StampIcon {...props}/>
        case 'STAR':
            return <StarIcon {...props}/>
        case 'STICKY':
            return <StickyIcon {...props}/>
        case 'TEXT':
            return <TextIcon {...props}/>
        case 'TABLE':
            return <TableIcon {...props}/>
    }
}

const WidgetIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.05 3.05 8 1 5.95 3.05h-2.9v2.9L1 8l2.05 2.05v2.9h2.9L8 15l2.05-2.05h2.9v-2.9L15 8l-2.05-2.05v-2.9h-2.9Zm2 .9H9.676L7.999 2.272 6.322 3.95H3.95v2.372L2.272 8 3.95 9.676v2.372h2.372l1.677 1.678 1.678-1.678h2.372V9.677L13.727 8l-1.678-1.678V3.95h.001ZM8.627 4.976 7.083 7.1h3.625l-3.395 4.455-.716-.545L8.891 8H5.316L7.9 4.446l.727.53Z" fill="${props.fill}"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const TextIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3h10v3h-1V4H8.5v8H10v1H6v-1h1.5V4H4v2H3V3Z" fill="${props.fill}" fill-opacity=".8"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const ComponentIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
        <path fill="${props.fill}" d="M5.743 4.748 8 2.5l2.257 2.248L8 6.996 5.743 4.748Zm-.995 5.51L2.5 8l2.248-2.257L6.996 8l-2.248 2.257v.001Zm5.51.994L8 13.5l-2.257-2.248L8 9.004l2.257 2.248h.001ZM13.5 8l-2.248-2.257L9.004 8l2.248 2.257L13.5 8Z"/>
        </svg>
    `

    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const ConnectorIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
        <path fill="${props.fill}" fill-rule="evenodd" d="m15 4.5-4-2.31V4H9.5A2.5 2.5 0 0 0 7 6.5v5A1.5 1.5 0 0 1 5.5 13H2v1h3.5A2.5 2.5 0 0 0 8 11.5v-5A1.5 1.5 0 0 1 9.5 5H11v1.81l4-2.31Z" clip-rule="evenodd"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const EllipseIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
        <path stroke="${props.fill}" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10Z"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const FrameIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
        <path fill="${props.fill}" fill-rule="evenodd" d="M6 2.5V5h4V2.5h1V5h2.5v1H11v4h2.5v1H11v2.5h-1V11H6v2.5H5V11H2.5v-1H5V6H2.5V5H5V2.5h1Zm4 7.5V6H6v4h4Z" clip-rule="evenodd"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const GroupIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
        <path fill="${props.fill}" fill-rule="evenodd" d="M9 3H7v1h2V3Zm2.5 9h.5v-.5h1V13h-1.5v-1ZM4 7v2H3V7h1Zm8-2.5V4h-.5V3H13v1.5h-1ZM12 7v2h1V7h-1ZM4 4.5V4h.5V3H3v1.5h1ZM3 12v-.5h1v.5h.5v1H3v-1Zm6 0H7v1h2v-1Z" clip-rule="evenodd"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const InstanceIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="m1.828 8 .336-.336 5.5-5.5L8 1.828l.336.336 5.5 5.5.336.336-.336.336-5.5 5.5-.336.336-.336-.336-5.5-5.5L1.828 8ZM8 12.828 12.828 8 8 3.172 3.172 8 8 12.828Z" fill="${props.fill}"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const ReactangleIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
        <path stroke="${props.fill}" d="M3.5 3H3v10h10V3H3.5Z"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const SectionIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM8 3H3v3h5V3ZM3 7h5.5a.5.5 0 0 0 .5-.5V3h4v10H3V7Z" fill="${props.fill}"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const ShapeTextIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
        <path fill="${props.fill}" fill-rule="evenodd" d="M13 3H3v10h10V3ZM2 2v12h12V2H2Z" clip-rule="evenodd"/>
        <path fill="${props.fill}" d="M5.5 5.5v2h1v-1h1v3h-1v1h3v-1h-1v-3h1v1h1v-2h-5Z"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const SliceIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3H6v1h4V3ZM4 4V3H3v1h1ZM3 6h1v4H3V6Zm9 0h1v4h-1V6Zm1-2h-1V3h1v1Zm-7 8h4v1H6v-1Zm-2 0H3v1h1v-1Zm8 1v-1h1v1h-1Z" fill="${props.fill}"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const StampIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.357 7.51a2.995 2.995 0 0 1-1.336-2.863A2.997 2.997 0 0 1 8 2a2.997 2.997 0 0 1 2.461 4.715c-.221.318-.5.587-.818.795l.263 1.05L13 9.077V12H3V9.076l3.094-.515.263-1.051Zm.314-4.005a2.006 2.006 0 0 1 2.658 0 1.997 1.997 0 0 1 .312 2.639 2 2 0 0 1-1.174.8c.125.522.267 1.036.393 1.556H7.14c.13-.52.268-1.034.393-1.555a2 2 0 0 1-.862-3.44ZM4 9.924 6.541 9.5H9.46l2.54.424V11H4V9.924Z" fill="${props.fill}"/>
        <path d="M4 13h8v1H4v-1Z" fill="${props.fill}"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const StarIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.476 3.845 8 2.382l-.476 1.463-.898 2.764H2.181l1.245.905 2.351 1.708-.898 2.764-.475 1.464 1.245-.905L8 10.837l2.351 1.708 1.245.905-.475-1.464-.899-2.764 2.352-1.708 1.245-.905H9.374l-.898-2.764Z" stroke="${props.fill}"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const StickyIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 2.5h11v5.707L8.207 13.5H2.5v-11Zm1 1v9h4v-5h5v-4h-9Zm8.293 5H8.5v3.293L11.793 8.5Z" fill="${props.fill}"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}

const TableIcon = (props : Partial<SVGProps>) => {
    const src = `
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9V7h2v2H3Zm-1 1V3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V10Zm11-1V7H6v2h7Zm-7 1h7v2H6v-2Zm-1 0v2H3v-2h2Zm8-6v2H6V4h7ZM5 4v2H3V4h2Z" fill="${props.fill}"/>
        </svg>
    `
    return (
        <SVGWrapper src={src} {...props}/>
    )
}


export default TypeIcon