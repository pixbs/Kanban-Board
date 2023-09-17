const { widget } = figma
const { AutoLayout, Text, useSyncedState } = widget
import { CardProps } from "../../interfaces/props"
import Badges from "./badges"
import { theme } from "../../interfaces/types"
import { blankTheme } from "../other/themes"
import addUser from "../../utils/addUser"

const Card = (card : CardProps) => {

    const [theme] = useSyncedState<theme>('theme', blankTheme)
    const [unit] = useSyncedState<number>('unit', 0)
    const [users,setUsers] = useSyncedState<BaseUser[]>('users', [])

    const parentStyle : AutoLayoutProps = {
        //Properties
        name: card.name,
        key: card.name,

        //Layout
        width: unit*37.5,
        wrap: true,
        padding: unit*2,
        spacing: unit*1.5,
        verticalAlignItems: "center",
        
        //Style
        cornerRadius: unit*0.5,
        stroke: {type: "solid", color: theme.secondary},
        strokeWidth: unit/8,
        fill: theme.background,

        //Events
        hoverStyle: {fill: theme.secondary},
        onClick: () => new Promise((resolve) => {
            setUsers(addUser(users, figma.currentUser))

            figma.showUI(__html__, {height: 540, width: 400});
            figma.ui.postMessage({type: 'card', content: card})
            figma.ui.postMessage({type: 'users', content: users})
            
        })
    }

    const titleStyle : TextProps = {
        //Style
        fontSize: unit*2,
        fill: theme.primary,

        //Layout
        width: 'fill-parent',
    }

    return (
        <AutoLayout {...parentStyle}>
            <Text {...titleStyle}>
                {card.name}
            </Text>
            <Badges {...card}/>
        </AutoLayout>
    )
}

export default Card;