const { widget } = figma
const { AutoLayout, useSyncedState } = widget
import Card from '../card/card'
import EmptyCard from '../card/empty-card'
import { ColumnProps } from "../../interfaces/props"
import ColumnHeader from './column-header'

const Column = (column: ColumnProps) => {

    const [unit] = useSyncedState<number>('unit', 0)

    // JSX Styles

    const parentStyle : AutoLayoutProps = {
        // Properties
        name: 'Column',
        key: column.name,

        // Layout
        direction: 'vertical',
        spacing: unit*2,
    }

    return (
        <AutoLayout {...parentStyle}>
            <ColumnHeader {...column}/>
            <EmptyCard {...column}/>
            {column.cards.map((card) => (
                <Card {...card} columnIndex={column.index}/>
            ))}
        </AutoLayout>
    )
}

export default Column;