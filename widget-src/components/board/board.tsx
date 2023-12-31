const { widget } = figma
const { AutoLayout, useSyncedState, useEffect, useWidgetNodeId } = widget
import Column from '../column/column'
import { CardProps, ColumnProps, NodeProps } from "../../interfaces/props"
import ShowNode from '../../utils/showNode'
import firstCard from '../other/firstCard'



const Board = () => {

    const [unit] = useSyncedState<number>('unit', 0)
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
                    break
                case 'link':
                    updateLink(msg.card)
                    break
                case 'open':
                    ShowNode(msg.card.node)
                    break
                case 'position':
                    movePosition(msg.content, msg.card)
                    break
            }
        }
    })
    
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
        newColumns[index].cards.unshift(card)
        setColumns(newColumns)
        updatePositions()
        figma.ui.postMessage({type: 'posLenght', content: newColumns[index].cards.length})
    }

    const movePosition = (index : number, card : CardProps) => {
        if(index === card.position) return
        const cardLocation = findCard(card.id)
        if(!cardLocation) return
        if(!card.posLength || index > card.posLength-1) return
        const newColumns = [...columns]
        newColumns[cardLocation.columns].cards.splice(cardLocation.cards, 1)
        newColumns[cardLocation.columns].cards.splice(index, 0, card)
        setColumns(newColumns)
        updatePositions()
    }

    const removeCard = (card : CardProps) => {
        const cardLocation = findCard(card.id)
        if(!cardLocation) return
        const newColumns = [...columns]
        newColumns[cardLocation.columns].cards.splice(cardLocation.cards, 1)
        setColumns(newColumns)
        updatePositions()
    }

    const updateCard = (card : CardProps) => {
        const cardLocation = findCard(card.id)
        if(!cardLocation) return
        const newColumns = [...columns]
        newColumns[cardLocation.columns].cards[cardLocation.cards] = card
        setColumns(newColumns)
        figma.ui.postMessage({type: 'card', content: card})
    }

    const updateLink = (card : CardProps) => {
        if (figma.currentPage.selection.length === 0) {
            figma.notify('Please select an object first.')
            return
        }
        if (figma.currentPage.selection.length !== 1) {
            figma.notify('You can only select one object.')
            return
        }
        const node : NodeProps = {
            name: figma.currentPage.selection[0].name,
            id: figma.currentPage.selection[0].id,
            type: figma.currentPage.selection[0].type,
            pageId: figma.currentPage.id
        }

        updateCard({...card, node: node})
    }

    const handleAdd = (column : ColumnProps, card: CardProps) => {
        if(!columns) return
        setCardCount(cardCount+1)
        card.id = `card-${cardCount}`
        card.posLength = column.cards.length
        const newColumns = [...columns]
        for (let i = 0; i < newColumns.length; i++) {
            if(newColumns[i].name === column.name) {
                newColumns[i].cards.unshift(card)
                setColumns(newColumns)
                updatePositions()
                return
            }
        }
    }

    const updatePositions = () => {
        if(!columns) return
        const newColumns = [...columns]
        for (let i = 0; i < newColumns.length; i++) {
            newColumns[i].cards.map((card, index) => {
                card.posLength = newColumns[i].cards.length
                card.position = index
            })
        }
        setColumns(newColumns)
    }

    const initialColumns: ColumnProps[] = [
        {name: 'To Do',cards: [firstCard]},
        {name: 'In Progress',cards: []},
        {name: 'Done',cards: []}     
    ]

    const [columns, setColumns] = useSyncedState<ColumnProps[]>('columns', initialColumns)
    useSyncedState<string[]>('columnNames', columns.map((column) => column.name))

    return (
        <AutoLayout
        spacing={unit*2}
        >
            {columns.map((column, index) => (
                <Column {...column} index={index} onAdd={handleAdd}/>
            ))}
        </AutoLayout>
    )
}

export default Board;