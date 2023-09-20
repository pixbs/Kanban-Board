import React, { useState } from "react"
import { BaseUser, CardProps } from '../interfaces/props'
import { Title, Actions, Description, LinkedDesign } from "./index"
import "../styles/Card.css"
function Card() {
    
    const [card, setCard] = useState<CardProps>({} as CardProps)
    const [users, setUsers] = useState<BaseUser[]>([])
    const [columns, setColumns] = useState<string[]>([])

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

    return (
        <div className="card">
            <Title name={card.name}/>
            <Actions columnIndex={card.columnIndex} columns={columns} date={card.date} assignee={card.assignee}/>
            <Description description={card.description}/>
            <LinkedDesign {...card.node}/>
        </div>
    )
}

export default Card