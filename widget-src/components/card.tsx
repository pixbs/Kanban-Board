const { AutoLayout, Text } = widget

export interface CardProps {
    name: string
}

const Card = ({ card } : { card : CardProps }) => {
    return (
        <AutoLayout>
            <Text>{card.name}</Text>
        </AutoLayout>
    )
}

export default Card;