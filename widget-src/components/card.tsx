const { widget } = figma
const { AutoLayout, Text } = widget

export interface CardProps {
    name: string
    onMove: (direction: 'left' | 'right') => void
}

const Card = (card : CardProps) => {
    return (
        <AutoLayout
        padding={8}
        fill="#FFF"
        cornerRadius={2}
        spacing={4}
        >
            <Text>{card.name}</Text>
            <Text
                onClick={() => card.onMove('left')}
            >
                {"<-"}
            </Text>
            <Text
                onClick={() => card.onMove('right')}
            >
                {"->"}
            </Text>
            <Text>
                {"X"}
            </Text>
            
        </AutoLayout>
    )
}

export default Card;