import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';


const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode)

interface BaseUser {
    readonly id: string | null
    readonly name: string
    readonly photoUrl: string | undefined
}

interface Message {
    type: "card" | "users",
    content: any
}

interface Card {
    readonly id: string,
    name: string,
    description: string | undefined,
    nodeId: string | undefined,
    date: string | undefined,
    assignee: BaseUser | undefined
}

var users : BaseUser[]
var card : Card

function IFrame() : JSX.Element {

    return (
        <>
            <Input type="test" value={card.name} property="name"/>
            <Input type="text" value={card.description} property="description"/>
            <Input type="date" value={card.date} property="date"/>
            <Select value={card.assignee?.id} options={users}/>
        </>
    )
}

function Input(props) : JSX.Element {

    const type = props.type
    const [value, setValue] = useState(props.value)
    const property : "name" | "description" | "date" = props.property


    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey || event.key === 'Escape') {
            event.target.blur()
        }
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    
    const handleBlur = (event) => {
        card[property] = event.target.value
        parent.postMessage({pluginMessage: {type: card, content: card}}, '*')
    }

    return (
        <textarea
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        />
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
