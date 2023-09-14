import React from 'react';
import { useState } from 'react';
import { CardProps } from '../interfaces/props';
const test = () => {}
const Card = (card : CardProps) => {

    const [column, setColumn] = useState<number>(card.columnIndex? card.columnIndex : 0)
    const [name, setName] = useState<string>(card.name)
    const [description, setDescription] = useState<string>(card.description? card.description : '')
    const [date, setDate] = useState<string>(card.date? card.date : '')
    const columnNames = ['To Do', 'In Progress', 'Done']

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColumn(parseInt(event.target.value))
        parent.postMessage({pluginMessage: {type: 'move',card: card, content: event.target.value}}, '*')
    }

    const handleBlur = () => {
        card = {
            ...card,
            id: card.id,
            name: name,
            description: description,
            date: date,
            columnIndex: column,
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
                {columnNames.map((name, index) => 
                    <option value={index} key={`${index}-${name}`}>{name}</option>
                )}
            </select>
            <button
                onClick={() => {
                    if(column === columnNames.length -1) return
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
            <input
                value={date}
                type='date'
                onChange={(event) => 
                    setDate(event.target.value)
                }
            />
            <span>
                {card.node?.name}
            </span>
        </div>
    )

}

export default Card;