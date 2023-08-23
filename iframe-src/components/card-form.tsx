import React from 'react';
import { useState } from 'react';
import { Card, Message } from '../../widget-src/interfaces/index'

export function CardForm(props) : JSX.Element {

    var card : Card = props.card
    const [name, setName] = useState<string>(card.name)
    const [description, setDescription] = useState<string>(card.description || "")
    const [date, setDate] = useState<string>(card.date || "")

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey || event.key === 'Escape') {
            event.target.blur()
        }
    }

    const handleBlur = () => {
        card = {
            id: card.id,
            name: name,
            description: description,
            date: date,
            nodeId: card.nodeId,
            assignee: card.assignee
        }
        const message : Message = {type: "card", content: card}
        parent.postMessage({pluginMessage: message}, '*')
    }

    return <>
        <textarea 
            value={name} 
            id="name" 
            onChange={event => setName(event.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
        />
        <textarea 
            value={description} 
            id="description" 
            onChange={event => setDescription(event.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
        />
        <input 
            type="date" 
            value={date} 
            id="date" 
            onChange={event => setDate(event.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
        />
    </>
}