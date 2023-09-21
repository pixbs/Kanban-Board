import React, { useState } from "react"
import { BaseUser, CardProps } from '../../interfaces/props'
import { Title, Actions, Description, LinkedDesign } from "./index"
import "../../styles/Card.css"
function Card() {
    
    const [card, setCard] = useState<CardProps>({} as CardProps)
    const [users, setUsers] = useState<BaseUser[]>([])
    const [columns, setColumns] = useState<string[]>([])
    
    const borderStyles = ['orange_border','blue_border','green_border']
    
    const columnColors = ['FCCC88', '8CD0FD', '8DE2BE']


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

    const handleUpdate = () => {
        parent.postMessage({ pluginMessage: { type: 'update', card: card } }, '*')
    }

    return (
        <div className={`card ${borderStyles[card.columnIndex ? card.columnIndex : 0]}`}>
            <Title name={card.name}/>
            <Actions onMove={handleMove} onRemove={handleRemove} onUpdate={handleUpdate} columnIndex={card.columnIndex} columns={columns} date={card.date} assignee={card.assignee}/>
            <Description description={card.description}/>
            <LinkedDesign {...card.node}/>
        </div>
    )
}

export default Card