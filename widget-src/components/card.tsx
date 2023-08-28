const { widget } = figma
const { AutoLayout, Text } = widget
import { CardProps } from "../interfaces/props"

const Card = (card : CardProps) => {
    return (
        <AutoLayout
        key={card.name}
        padding={8}
        fill="#FFF"
        cornerRadius={2}
        spacing={4}
        >
            <Text>{card.id}</Text>
            <Text>{card.name}</Text>
            <Text
                onClick={() => {
                    if(!card.onChange) return
                    card.onChange('left', card)
                }}
            >
                {"<-"}
            </Text>
            <Text
                onClick={() => {
                    if(!card.onChange) return
                    card.onChange('right', card)
                }}
            >
                {"->"}
            </Text>
            <Text
                onClick={() => {
                    if(!card.onChange) return
                    card.onChange('remove', card)
                }}
            >
                {"X"}
            </Text>
            
        </AutoLayout>
    )
}

export default Card;