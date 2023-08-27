const { widget } = figma
const { AutoLayout } = widget
import Column, {ColumnProps} from './column'

const Board = () => {

    const handleMove = (direction: 'left' | 'right') => {
        console.log(direction)
    }

    const columns : ColumnProps[] = [
        {name: 'To Do', cards: [{name: 'Card 1', onMove: handleMove}, {name: 'Card 2', onMove: handleMove}]},
        {name: 'In Progress', cards: [{name: 'Card 3', onMove: handleMove}, {name: 'Card 4', onMove: handleMove}]},
        {name: 'Done', cards: []}
    ]


    return (
        <AutoLayout
        spacing={8}
        >
            {columns.map((column) => (
                <Column {...column}/>
            ))}
        </AutoLayout>
    )
}

export default Board;