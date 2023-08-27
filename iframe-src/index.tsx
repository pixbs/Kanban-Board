import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CardForm } from './components/card-form';
import { IconWrapper } from './components/icon-wrapper';
import { Card, Message } from '../widget-src/interfaces/index'


const root = createRoot(document.getElementById('root') as HTMLElement)

var card : Card

function IFrame() : JSX.Element {

    return (
        <CardForm card={card} />
    )
}

onmessage = event => {
    const message = event.data.pluginMessage as Message
    switch (message.type) {
        case "card":
            card = message.content as Card
            root.render(<CardForm card={card} />)
            break;
    }
}
