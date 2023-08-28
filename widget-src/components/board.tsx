const { widget } = figma
const { AutoLayout, useSyncedState, useEffect, waitForTask, useWidgetId } = widget
import Column from './column'
import { CardProps, ColumnProps } from "../interfaces/props"

const Board = () => {

    var [cardCount, setCardCount] = useSyncedState<number>('cardCount', 0)

    const handleChange = (action: 'left' | 'right' | 'remove', recieveCard : CardProps) => {
        if(!columns) return
        const newColumns = [...columns]
        for (let i = 0; i < newColumns.length; i++) {
            for (let j = 0 ; j < newColumns[i].cards.length; j++) {
                if(newColumns[i].cards[j].id === recieveCard.id) {
                    if(action === 'left') {
                        if(i === 0) return
                        newColumns[i-1].cards.push(newColumns[i].cards[j])
                        newColumns[i].cards.splice(j, 1)
                        setColumns(newColumns)
                        return
                    } else if (action === 'right') {
                        if(i === newColumns.length - 1) return
                        newColumns[i+1].cards.push(newColumns[i].cards[j])
                        newColumns[i].cards.splice(j, 1)
                        setColumns(newColumns)
                        return
                    } else if (action === 'remove') {
                        newColumns[i].cards.splice(j, 1)
                        setColumns(newColumns)
                        return
                    }
                }
            }
        }
    }

    const handleAdd = (column : ColumnProps, card: CardProps) => {
        if(!columns) return
        setCardCount(cardCount+1)
        card.id = `card-${cardCount}`
        const newColumns = [...columns]
        for (let i = 0; i < newColumns.length; i++) {
            if(newColumns[i].name === column.name) {
                newColumns[i].cards.push(card)
                setColumns(newColumns)
                return
            }
        }
    }

    const initialColumns: ColumnProps[] = [
        {name: 'To Do',cards: []},
        {name: 'In Progress',cards: []},
        {name: 'Done',cards: []}     
    ]

    const [columns, setColumns] = useSyncedState<ColumnProps[]>('columns', initialColumns)

    return (
        <AutoLayout
        spacing={8}
        >
            {columns.map((column) => (
                <Column name={column.name} cards={column.cards} onChange={handleChange} onAdd={handleAdd}/>
            ))}
        </AutoLayout>
    )
}

export default Board;