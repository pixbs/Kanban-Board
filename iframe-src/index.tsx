import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CardForm } from './components/card-form';
import { Card } from '../widget-src/interfaces/index'

const root = createRoot(document.getElementById('root') as HTMLElement)

interface BaseUser {
    readonly id: string | null
    readonly name: string
    readonly photoUrl: string | undefined
}

interface Message {
    type: "card" | "users",
    content: any
}

var users : BaseUser[]
var card : Card

function IFrame() : JSX.Element {

    return (
        <>
            <CardForm card={card} />
        </>
    )
}

function Select(props) : JSX.Element {
    
    const [value, setValue] = useState<number>(props.value)
    const options : BaseUser[] = props.options
    
    const handleChange = (event) => {
        setValue(event.target.value)
    }


    
    return (
        <select
        value={value}
        onChange={handleChange}
        >
            {options?.map( user => (
                <option key={user.id}>{user.name}</option>)
                )}
        </select>
        )
}

onmessage = event => {
    const message = event.data.pluginMessage as Message
    switch (message.type) {
        case "card":
            card = message.content as Card
            root.render(IFrame())
            break;
        case "users":
            users = message.content as BaseUser[]
            root.render(IFrame())
            break;
    }
}
