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
    date: Date | undefined,
    assignee: BaseUser | undefined
}

var users : BaseUser[]
var card : Card

onmessage = event => {
    const message = event.data.pluginMessage as Message
    switch (message.type) {
        case "card":
            card = message.content as Card
            root.render(App())
            break;
        case "users":
            users = message.content as BaseUser[]
            root.render(App())
            break;
    }

    console.log(JSON.stringify(event.data) + " recived from figma")
    
}

function App() : JSX.Element {

    return (
        <>
            <NameInput />
            <select>
                {users?.map( user => (
                    <option key={user.id}>{user.name}</option>)
                )}
            </select>
            <input type="text" value={card.description}/>
            <input type="date"/>
        </>
    )
}

function NameInput() {
    const [name, setName] = useState("")

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        setName(value)
        parent.postMessage({pluginMessage: {type: "name", content: value}}, '*')
    }

    return (
        <input type="text" value={name} onChange={handleChange}/>
    )
}

class CardForm extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={card.name}/>
                <select>
                    {users?.map( user => (
                        <option key={user.id}>{user.name}</option>)
                    )}
                </select>
                <input type="text" value={card.description}/>
                <input type="date"/>
            </div>
        )
    }
}

function dateToHtml(date: Date | undefined){
    if(!date){
        return
    }
    var day = ("0" + date.getDate()).slice(-2)
    var month = ("0" + (date.getMonth() + 1)).slice(-2)
    return date.getFullYear()+"-"+(month)+"-"+(day)
}
