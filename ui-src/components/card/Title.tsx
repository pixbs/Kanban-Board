import React, { useState } from 'react';
import { TitleIcon } from '../icons/Icons';
import '../../styles/Title.css';
import { CardProps } from '../../interfaces/props';

function Title({name, onUpdate} : {name: string, onUpdate: (card: Partial<CardProps>) => void}) {

    const handleTextBlur = (e: React.FormEvent<HTMLSpanElement>) => {
        if (!e.currentTarget.textContent) return;
        onUpdate({name: e.currentTarget.textContent});
    }

    return (
        <div className="icon_wrapper">
            <TitleIcon />
            <span 
                className='Name' 
                contentEditable={true}
                onBlur={handleTextBlur}
                placeholder="Card name can't be empty."
            >
                {name}
            </span>
        </div>
    )
}

export default Title