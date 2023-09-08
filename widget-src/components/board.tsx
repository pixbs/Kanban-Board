const { widget } = figma
const { AutoLayout, useSyncedState, useEffect, waitForTask, useWidgetId } = widget
import Column from './column'
import { CardProps, ColumnProps } from "../interfaces/props"

const Board = () => {

    useEffect(() => {
        figma.ui.onmessage = (msg) => {
            if(msg.type === 'move'){
                moveCard(msg.content, msg.card)
            }
            if(msg.type === 'remove'){
                removeCard(msg.card)
                figma.closePlugin()
            }
        }
    })

    const [cardCount, setCardCount] = useSyncedState<number>('cardCount', 0)
    const [showEmptyCard, setShowEmptyCard] = useSyncedState<number | undefined>('showEmptyCard', undefined)
    
    const findCard = (id : string) => {
        if(!columns) return
        for (let i = 0; i < columns.length; i++) {
            for (let j = 0 ; j < columns[i].cards.length; j++) {
                if(columns[i].cards[j].id === id) {
                    return {columns: i, cards: j}
                }
            }
        }
    }

    const moveCard = (index : number, card : CardProps) => {
        const cardLocation = findCard(card.id)
        if(!cardLocation) return
        const newColumns = [...columns]
        newColumns[cardLocation.columns].cards.splice(cardLocation.cards, 1)
        newColumns[index].cards.push(card)
        setColumns(newColumns)
    }

    const removeCard = (card : CardProps) => {
        const cardLocation = findCard(card.id)
        if(!cardLocation) return
        const newColumns = [...columns]
        newColumns[cardLocation.columns].cards.splice(cardLocation.cards, 1)
        setColumns(newColumns)
    }

    const handleAdd = (column : ColumnProps, card: CardProps) => {
        if(!columns) return
        setCardCount(cardCount+1)
        card.id = `card-${cardCount}`
        const newColumns = [...columns]
        for (let i = 0; i < newColumns.length; i++) {
            if(newColumns[i].name === column.name) {
                newColumns[i].cards.unshift(card)
                setColumns(newColumns)
                return
            }
        }
    }

    const initialColumns: ColumnProps[] = [
        {name: 'To Do',cards: []},
        {name: 'In Progress',cards: []},
        {name: 'Review',cards: []},
        {name: 'Done',cards: []}     
    ]

    const [columns, setColumns] = useSyncedState<ColumnProps[]>('columns', initialColumns)

    return (
        <AutoLayout
        spacing={8}
        >
            {columns.map((column, index) => (
                <Column index={index} name={column.name} cards={column.cards} onAdd={handleAdd} showEmptyCard={showEmptyCard}/>
            ))}
        </AutoLayout>
    )
}

export default Board;