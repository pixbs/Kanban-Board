const { widget } = figma
const { AutoLayout, Text } = widget
import { CardProps } from "../interfaces/props"
import Badges from "./badges"

const Card = (card : CardProps) => {

    const parentStyle : AutoLayoutProps = {
        //Properties
        name: card.name,
        key: card.name,

        //Layout
        width: 'fill-parent',
        padding: 16,
        direction: "vertical",
        spacing: 12,
        
        //Style
        cornerRadius: 4,
        stroke: {type: "solid", color: "#E6E6E6"},
        fill: "#FFF",

        //Events
        hoverStyle: {fill: "#E6E6E6"},
        onClick: () => new Promise((resolve) => {
            figma.showUI(__html__, {height: 540, width: 400});
            figma.ui.postMessage({type: 'card', content: card})
        })
    }

    const titleStyle : TextProps = {
        //Style
        fontSize: 16,
        fill: "#333",

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