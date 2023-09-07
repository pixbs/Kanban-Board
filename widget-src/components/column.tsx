const { widget } = figma
const { AutoLayout, Text, useSyncedState } = widget
import Card from './card'
import EmptyCard from './empty-card'
import { ColumnProps } from "../interfaces/props"

const Column = (column: ColumnProps) => {

    const [showEmptyCard, setShowEmptyCard] = useSyncedState<number | undefined>('showEmptyCard', column.showEmptyCard)
    const counter = column.cards?.length

    return (
        <AutoLayout
        key={column.name}
        direction='vertical'
        spacing={2}
        width={300}
        >
            <AutoLayout width='fill-parent'>
                <Text fill="#FFF" width='fill-parent'>
                    {`${column.name} (${column.cards?.length})`}
                </Text>
                <Text 
                    fill='#FFF'
                    onClick={() => {
                        setShowEmptyCard(column.index)
                    }}
                >
                    +
                </Text>
            </AutoLayout>
            <EmptyCard {...column}/>
            {column.cards.map((card) => (
                <Card id={card.id} name={card.name} onChange={column.onChange}/>
            ))}
        </AutoLayout>
    )
}

export default Column;