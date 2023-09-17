import React from 'react';
import { useState } from 'react';
import { BaseUser ,CardProps } from '../interfaces/props';

const Card = () => {
    const [card, setCard] = useState<CardProps>({} as CardProps)
    const [users, setUsers] = useState<BaseUser[]>([])
    const [columns, setColumns] = useState<string[]>([])
    onmessage = (event) => {
        const message = event.data.pluginMessage
        switch (message.type) {
            case 'card':
                setCard(message.content)
                break;
            case 'users':
                setUsers(message.content)
            case 'columns':
                setColumns(message.content)
        }
    }

    return <>
    <p>
        {JSON.stringify(card)}
    </p>
    <p>
        {JSON.stringify(users)}
    </p>
    <p>
        {JSON.stringify(columns)}
    </p>
    </>
}

export default Card;