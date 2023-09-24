import React, { useState, createContext } from "react"
import { BaseUser, CardProps } from '../../interfaces/props'
import { Title, Actions, Description, LinkedDesign } from "./index"
import "../../styles/Card.css"

export const CardContext = createContext<{
    card: CardProps, 
    users: BaseUser[], 
    columns: string[]
    move: (index: number) => void
    remove: () => void
    update: (card: Partial<CardProps>) => void
}>
    ({
        card: {} as CardProps, 
        users: [], 
        columns: [],
        move: (index: number) => {throw new Error('Move function was not assigned')},
        remove: () => {throw new Error('Remove function was not assigned')},
        update: (card: Partial<CardProps>) => {throw new Error('Update function was not assigned')}
    })

function Card() {
    
    const [card, setCard] = useState<CardProps>({} as CardProps)
    const [users, setUsers] = useState<BaseUser[]>([])
    const [columns, setColumns] = useState<string[]>([])
    
    const borderStyles = ['orange_border','blue_border','green_border']

    onmessage = (event) => {
        const message = event.data.pluginMessage
        switch (message.type) {
            case 'card':
                setCard(message.content)
                break;
            case 'users':
                setUsers(message.content)
                break;
            case 'columns':
                setColumns(message.content)
                break;
        }
    }

    const handleMove = (index : number) => {
        setCard({...card, columnIndex: index})
        parent.postMessage({ pluginMessage: { type: 'move', content: index, card: card } }, '*')
    }

    const handleRemove = () => {
        parent.postMessage({ pluginMessage: { type: 'remove', card: card } }, '*')
    }

    const handleUpdate = (cardProp : Partial<CardProps>) => {
        const newCard = {...card, ...cardProp}
        console.log(newCard)
        setCard(newCard)
        parent.postMessage({ pluginMessage: { type: 'update', card: newCard } }, '*')
    }

    return (
        <CardContext.Provider value={
            {
                card: card,
                users: users,
                columns: columns,
                move: handleMove,
                remove: handleRemove,
                update: handleUpdate
            }
        }>
            <div className={`card ${borderStyles[card.columnIndex ? card.columnIndex : 0]}`}>
                <Title onUpdate={handleUpdate} name={card.name}/>
                <Actions />
                <Description onUpdate={handleUpdate} description={card.description}/>
                <LinkedDesign />
            </div>
        </CardContext.Provider>
    )
}

export default Card