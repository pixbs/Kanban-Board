import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Card from './components/card';


const root = createRoot(document.getElementById('root') as HTMLElement)

onmessage = (event) => {
    const message = event.data.pluginMessage
    switch (message.type) {
        case 'card':
            root.render(<Card {...message.content}/>)
    }
}