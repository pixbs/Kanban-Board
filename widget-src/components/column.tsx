import Card, {CardProps} from './card'
const { AutoLayout } = widget

interface ColumnProps {
    name: string
    cards: CardProps[]
}

const Column = ({ column } : { column : ColumnProps }) => {
    return (
        <AutoLayout>
            {column.cards.map((card) => (
                <Card card={card} />
            ))}
        </AutoLayout>
    )
}