const { widget } = figma
const { AutoLayout, Text, useSyncedState } = widget
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
            <Text>{card.name}</Text>
            <AutoLayout
            >
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
                        card.onChange('complete', card)
                    }}
                >
                    {"✔"}
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
            
        </AutoLayout>
    )
}

export default Card;