import React from 'react';
import { useState } from 'react';
import { CardProps } from '../interfaces/props';

const Card = (card : CardProps) => {

    const [column, setColumn] = useState<number>(card.columnIndex? card.columnIndex : 0)
    const [name, setName] = useState<string>(card.name)
    const [description, setDescription] = useState<string>(card.description? card.description : '')

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColumn(parseInt(event.target.value))
        parent.postMessage({pluginMessage: {type: 'move',card: card, content: event.target.value}}, '*')
    }

    const handleBlur = () => {
        card = {
            id: card.id,
            name: name,
            description: description
        }
        parent.postMessage({pluginMessage: {type: 'update', card: card}}, '*')
    }

    return (
        <div 
            className='card'
            onBlur={handleBlur}
        >
            <textarea
            value={name}
            onChange={(event) => {
                setName(event.target.value)
            }}
            />
            <select 
                name='column' 
                onChange={handleChange} 
                value={column}
            >
                <option value={0}>To Do</option>
                <option value={1}>In Progress</option>
                <option value={2}>Done</option>
            </select>
            <button
                onClick={() => {
                    if(column === 2) return
                    setColumn(column+1)
                    parent.postMessage({pluginMessage: {type: 'move',card: card, content: column+1}}, '*')
                }}
            >
                {'->'}
            </button>
            <button
                onClick={() => {
                    parent.postMessage({pluginMessage: {type: 'remove', card: card}}, '*')
                }}
            >Remove</button>
            <textarea
            value={description}
            onChange={(event) => {
                setDescription(event.target.value)
            }}
            />
        </div>
    )

}

export default Card;