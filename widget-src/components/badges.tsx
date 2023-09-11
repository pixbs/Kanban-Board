const { widget } = figma
const { AutoLayout, Text } = widget
import { CardProps } from "../interfaces/props"
import formatDate  from "../utils/formatDate"
import { DescriptionIcon, TimeIcon } from "./icons"

const Badges = (card : CardProps) => {

    //JSX Styles

    const parentStyle : AutoLayoutProps = {
        //Properties
        name: "badges",

        //Layout
        spacing: 4,
        verticalAlignItems: "center",
    }

    const iconStyle : Partial<SVGProps> = {
        fill: "#333",
        strokeWidth: 1,
        width: 16,
        height: 16,
    }
    
    const textStyle : TextProps = {
        //Style
        fontSize: 12,
        fill: "#333",
        fontWeight: 500,
    }
    
    const badgeWrapperStyle : AutoLayoutProps = {
        //Properties
        name: "badge-wrapper",
    
        //Layout
        spacing: 4,
        verticalAlignItems: "center",
    
        //Style
        cornerRadius: 4,
        fill: "#FFF",
        stroke: {type: "solid", color: "#E6E6E6"},
    }

    // Sub-components

    const DescriptionBadge = ({description} : {description? : string}) => {
        if (!description) return <></>
        return (
            <AutoLayout tooltip={description} padding={4} {...badgeWrapperStyle}>
                <DescriptionIcon {...iconStyle}/>
            </AutoLayout>
        )
    }
    
    const TimeBadge = ({date} : {date? : string}) => {
        
        if(!date) return <></>
    
        return (
            <AutoLayout tooltip={`Due to ${date}`} padding={{horizontal: 8, vertical: 4}} {...badgeWrapperStyle}>
                <TimeIcon {...iconStyle}/>
                <Text {...textStyle}>{formatDate(date)}</Text>
            </AutoLayout>
        )
    }

    // Return

    return (
        <AutoLayout {...parentStyle}>
            <DescriptionBadge description={card.description}/>
            <TimeBadge date={card.date}/>
        </AutoLayout>
    )
}



export default Badges;