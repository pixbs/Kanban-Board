import React, { useState } from 'react';
import { TitleIcon } from '../icons/Icons';
import '../../styles/Title.css';
import EditableSpan from '../misc/EditableSpan';
import { CardProps } from '../../interfaces/props';

function Title({name, onUpdate} : {name: string, onUpdate: (card: Partial<CardProps>) => void}) {

    const handleTextEdit = (e: React.FormEvent<HTMLSpanElement>) => {
        onUpdate({name: e.currentTarget.textContent || ''});
    }

    return (
        <div className="icon_wrapper">
            <TitleIcon />
            <span 
                className='Name' 
                contentEditable={true}
                onBlur={handleTextEdit}
            >
                {name}
            </span>
            {/* <EditableSpan text={name} onEdit={onUpdate}/> */}
        </div>
    )
}

export default Title