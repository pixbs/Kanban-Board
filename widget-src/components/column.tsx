const { widget } = figma
const { AutoLayout, Text } = widget
import Card, {CardProps} from './card'

export interface ColumnProps {
    name: string
    cards: CardProps[]
}

const Column = (column: ColumnProps) => {

    return (
        <AutoLayout
        direction='vertical'
        spacing={2}
        >
            <Text fill="#FFF">{column.name}</Text>
            {column.cards.map((card) => (
                <Card {...card}/>
            ))}
        </AutoLayout>
    )
}

export default Column;