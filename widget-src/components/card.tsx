const { widget } = figma
const { AutoLayout, Text } = widget
import { CardProps } from "../interfaces/props"

const Card = (card : CardProps) => {

    return (
        <AutoLayout
        key={card.name}
        width='fill-parent'
        padding={8}
        fill="#FFF"
        cornerRadius={2}
        spacing={4}
        direction="vertical"
        >
            <Text>{card.id}</Text>
            <Text
                onClick={
                    () => 
                    new Promise((resolve) => {
                        figma.showUI(__html__, {height: 500, width: 300});
                        figma.ui.postMessage({type: 'card', content: {id: card.id, name: card.name, description: card.description, columnIndex: card.columnIndex}})
                    })
                }
            >
                {card.name}
            </Text>
            
        </AutoLayout>
    )
}

export default Card;