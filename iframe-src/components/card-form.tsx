import React from 'react';
import { useState } from 'react';
import { Card, Message } from '../../widget-src/interfaces/index'
import { IconWrapper } from './icon-wrapper';
import { DescriptionIcon } from './icons';
import type CSS from 'node_modules/csstype/index.d.ts'

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

    return <div style={style}>
        <IconWrapper icon={<DescriptionIcon color="#000000"/>}>
            <textarea 
                style={labelStyle}
                value={name} 
                id="name" 
                onChange={event => setName(event.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
            />
        </IconWrapper>
        <IconWrapper icon={<DescriptionIcon color="#000000"/>}>
            <label htmlFor="description" style={labelStyle}>
                Description
            </label>
            <textarea 
                value={description} 
                id="description" 
                onChange={event => setDescription(event.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                style={textareaStyle}
            /> 
        </IconWrapper>
        <input 
            type="date" 
            value={date} 
            id="date" 
            onChange={event => setDate(event.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
        />
        <IconWrapper icon={<DescriptionIcon color="#000000"/>}>
            <label htmlFor="link" style={labelStyle}>
                Design link
            </label>
        </IconWrapper>
    </div>
}

const style : CSS.Properties = {
    display: "flex",
    paddingTop: "3.5rem",
    paddingRight: "6rem",
    paddingBottom: "3rem",
    paddingLeft: "2rem",
    flexDirection: "column",
    gap: "3rem",
    alignSelf: "stretch",
}

const labelStyle : CSS.Properties = {
    fontFamily: "Inter",
    fontSize: "2rem",
    fontWeight: "700",
}

const textareaStyle : CSS.Properties = {
    fontFamily: "Inter",
    width: "100%",
    height: "auto",
    fontSize: "2rem",
    border: "none",
    resize: "none",
}

