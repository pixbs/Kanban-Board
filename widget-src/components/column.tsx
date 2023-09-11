const { widget } = figma
const { AutoLayout, Text, useSyncedState } = widget
import Card from './card'
import EmptyCard from './empty-card'
import { ColumnProps } from "../interfaces/props"
import ColumnHeader from './column-header'

const Column = (column: ColumnProps) => {

    const counter = column.cards?.length

    return (
        <AutoLayout
        key={column.name}
        direction='vertical'
        spacing={2}
        width={300}
        >
            <ColumnHeader {...column}/>
            <EmptyCard {...column}/>
            {column.cards.map((card) => (
                <Card {...card} columnIndex={column.index}/>
            ))}
        </AutoLayout>
    )
}

export default Column;