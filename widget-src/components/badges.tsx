const { widget } = figma
const { AutoLayout, Text, useEffect, useSyncedState } = widget
import { CardProps } from "../interfaces/props"
import formatDate  from "../utils/formatDate"
import { DescriptionIcon, TimeIcon } from "./icons"

const Badges = (card : CardProps) => {

    if (!card.description && !card.date && !card.node) return <></>

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

    const LinkedNode = ({node} : {node? : {name: string, id: string, type: string}}) => {
        if (!node) return <></>

        const handleClick = () => {
            const baseNode = figma.getNodeById(node.id)
            if (!baseNode) return
            node.name = baseNode.name
            node.type = baseNode.type
            console.log(baseNode.name)
            figma.viewport.scrollAndZoomIntoView([baseNode])
        }

        return (
            <AutoLayout onClick={handleClick} tooltip={`Linked to ${JSON.stringify(node)}`} padding={{horizontal: 8, vertical: 4}} {...badgeWrapperStyle}>
                <Text {...textStyle}>{node.name}</Text>
            </AutoLayout>
        )
    }

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
            <LinkedNode node={card.node}/>
        </AutoLayout>
    )
}



export default Badges;