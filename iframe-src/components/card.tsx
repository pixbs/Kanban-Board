import React from 'react';
import { useState } from 'react';
import { CardProps } from '../interfaces/props';

const Card = (card : CardProps) => {
    if (card.columnIndex === undefined) {
        throw new Error('Card must have a column index '+card.columnIndex)
    }
    const [column, setColumn] = useState<number>(card.columnIndex)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColumn(parseInt(event.target.value))
        parent.postMessage({pluginMessage: {type: 'move',card: card, content: event.target.value}}, '*')
    }

    return (
        <div 
            className='card'
            onClick={() => {
                parent.postMessage({pluginMessage: {type: 'Test'}}, '*')
            }}
        >
            {card.id}
            {card.name}
            {card.description}
            <select name='column' onChange={handleChange} value={column}>
                <option value={0}>To Do</option>
                <option value={1}>In Progress</option>
                <option value={2}>Review</option>
                <option value={3}>Done</option>
            </select>
            <button
                onClick={() => {
                    parent.postMessage({pluginMessage: {type: 'remove', card: card}}, '*')
                }}
            >Remove</button>
        </div>
    )

}

export default Card;