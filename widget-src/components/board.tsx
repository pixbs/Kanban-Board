const { widget } = figma
const { AutoLayout, useSyncedState, useEffect, useWidgetNodeId } = widget
import Column from './column'
import { CardProps, ColumnProps } from "../interfaces/props"



const Board = () => {

    useEffect(() => {
        figma.ui.onmessage = (msg) => {
            switch (msg.type) {
                case 'move':
                    moveCard(msg.content, msg.card)
                    break
                case 'remove':
                    removeCard(msg.card)
                    figma.closePlugin()
                    break
                case 'update':
                    updateCard(msg.card)
            }
        }
    })

    const widgetId = useWidgetNodeId()
    const [cardCount, setCardCount] = useSyncedState<number>('cardCount', 0)
    
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
        if(index === card.columnIndex) return
        if(index > columns.length-1) return
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

    const updateCard = (card : CardProps) => {
        const cardLocation = findCard(card.id)
        if(!cardLocation) return
        const newColumns = [...columns]
        newColumns[cardLocation.columns].cards[cardLocation.cards] = card
        setColumns(newColumns)
    }

    const handleAdd = (column : ColumnProps, card: CardProps) => {
        if(!columns) return
        setCardCount(cardCount+1)
        card.id = `card-${cardCount}`
        card.node = {
            name: figma.currentPage.selection[0].name,
            id: figma.currentPage.selection[0].id,
            type: figma.currentPage.selection[0].type
        }
        console.log(card.node)
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
        {name: 'Done',cards: []}     
    ]

    const [columns, setColumns] = useSyncedState<ColumnProps[]>('columns', initialColumns)

    return (
        <AutoLayout
        spacing={8}
        >
            {columns.map((column, index) => (
                <Column {...column} index={index} onAdd={handleAdd}/>
            ))}
        </AutoLayout>
    )
}

export default Board;