const { widget } = figma
const { AutoLayout, Text, useSyncedState, Image, Rectangle } = widget
import { CardProps } from "../../interfaces/props"
import { theme } from "../../interfaces/types"
import formatDate  from "../../utils/formatDate"
import { DescriptionIcon, LeftChevronIcon, TimeIcon } from "../icons/icons"
import TypeIcon from "../icons/typeIcons"
import { blankTheme } from "../other/themes"

const Badges = (card : CardProps) => {

    const [theme] = useSyncedState<theme>('theme', blankTheme)
    const [unit] = useSyncedState<number>('unit', 0)

    //JSX Styles
    const badgesWrapperStyle : AutoLayoutProps = {
        //Properties
        name: "badges-wrapper",

        //Layout
        width: 'hug-contents',
        spacing: unit*3,
    }

    const badgesStyle : AutoLayoutProps = {
        //Properties
        name: "badges",

        //Layout
        width: unit*26.5,
        wrap: true,
        spacing: unit*0.5,
        verticalAlignItems: "center",
    }

    const iconStyle : Partial<SVGProps> = {
        fill: theme.primary,
        strokeWidth: 1,
        width: unit*2,
        height: unit*2,
    }
    
    const textStyle : TextProps = {

        //Layout
        width: 'hug-contents',

        //Style
        fontSize: unit*1.5,
        fill: theme.primary,
        fontWeight: 500,
    }
    
    const badgeWrapperStyle : AutoLayoutProps = {
        //Properties
        name: "badge-wrapper",
    
        //Layout
        width: 'hug-contents',
        spacing: unit*0.5,
        verticalAlignItems: "center",
        padding: {horizontal: unit, vertical: unit*0.5},
    
        //Style
        cornerRadius: unit*0.5,
        fill: theme.background,
        stroke: {type: "solid", color: theme.secondary},
    }

    const asigneeImageStyle : ImageProps = {
        // Properties
        name: "assignee-image",
        src: '',

        //Layout
        width: unit*4,
        height: unit*4,
        cornerRadius: unit*2,
    }

    // Sub-components

    const Assignee = ({assignee: assignee} : {assignee? : BaseUser}) => {
        if (!assignee) return <AutoLayout hidden={true} {...badgeWrapperStyle}/>
        if (!assignee.photoUrl) return <AutoLayout hidden={true} {...badgeWrapperStyle}/>

        const localAsigneeImageStyle = {
            ...asigneeImageStyle,
            tooltip: `Assigned to ${assignee.name}`,
            src: assignee.photoUrl
        }

        return (
            <Image 
            {...localAsigneeImageStyle}
            />
        )
    }

    const LinkedNode = ({node} : {node? : {name: string, id: string, type: string}}) => {
        if (!node) return <AutoLayout hidden={true} {...badgeWrapperStyle}/>

        const handleClick = () => {
            const baseNode = figma.getNodeById(node.id)
            if (!baseNode) return
            node.name = baseNode.name
            node.type = baseNode.type
            console.log(baseNode.name)
            figma.viewport.scrollAndZoomIntoView([baseNode])
        }

        const tooltip = `Linked to ${JSON.stringify(node)}`

        const localBadgeWrapperStyle : AutoLayoutProps = {
            ...badgeWrapperStyle,
        
            //Layout
            width: 'fill-parent',
            height: unit*3,
            minWidth: unit*16,
    
            //Style
            fill: theme.colorBlue,
            strokeWidth: 0,

            //Events
            tooltip: tooltip,
            onClick: handleClick,
        }

        const localTextStyle : TextProps = {
            ...textStyle,
            width : 'fill-parent',
            truncate: true,
            height: 'fill-parent',
        }

        return (
            <AutoLayout {...localBadgeWrapperStyle}>
                <TypeIcon type={node.type} {...iconStyle}/>
                <Text {...localTextStyle}>{node.name}</Text>
                <LeftChevronIcon {...iconStyle}/>
            </AutoLayout>
        )
    }

    const DescriptionBadge = ({description} : {description? : string}) => {
        if (!description) return <AutoLayout hidden={true} {...badgeWrapperStyle}/>

        const localBadgeWrapperStyle : AutoLayoutProps = {
            ...badgeWrapperStyle,
            tooltip: description,
            padding: unit*0.5,
            
        }

        return (
            <AutoLayout {...localBadgeWrapperStyle}>
                <DescriptionIcon {...iconStyle}/>
            </AutoLayout>
        )
    }
    
    const TimeBadge = ({date} : {date? : string}) => {
        
        if(!date) return <AutoLayout hidden={true} {...badgeWrapperStyle}/>

        const localBadgeWrapperStyle : AutoLayoutProps ={
            ...badgeWrapperStyle,
            tooltip: `Due to ${date}`,
        }
    
        return (
            <AutoLayout {...localBadgeWrapperStyle}>
                <TimeIcon {...iconStyle}/>
                <Text {...textStyle}>{formatDate(date)}</Text>
            </AutoLayout>
        )
    }

    const Badges = () => {
        if (!card.description && !card.date && !card.node) return <></>

        let localBadgesStyle : AutoLayoutProps = {
            ...badgesStyle,
        }

        if (!card.assignee) {
            localBadgesStyle = {
                ...badgesStyle,
                width: unit*33.5,
            }
        }

        return (
            <AutoLayout {...localBadgesStyle}>
                <DescriptionBadge description={card.description}/>
                <TimeBadge date={card.date}/>
                <LinkedNode node={card.node}/>
            </AutoLayout>
        )
    }

    // Return

    return (
        <AutoLayout {...badgesWrapperStyle}>
            <Badges/>
            <Assignee assignee={card.assignee}/>
        </AutoLayout>
    )
}



export default Badges;