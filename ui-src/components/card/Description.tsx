import React from 'react';
import '../../styles/Description.css'
import { DescriptionIcon } from '../icons/Icons';
import { CardProps } from '../../interfaces/props';
import keyPressHandler from '../../utils/KeyPressHandler';

function Description({ description, onUpdate }: { description?: string, onUpdate: (card: Partial<CardProps>) => void }) {
    const handleTextBlur = (e: React.FormEvent<HTMLSpanElement>) => {
        onUpdate({ description: e.currentTarget.innerText || ""})
    }
    
    return (
        <div className='icon_wrapper'>
            <DescriptionIcon />
            <div className='content_wrapper'>
                <h3>Description</h3>
                <h4
                    className='Description'
                    contentEditable={true}
                    onBlur={handleTextBlur}
                    placeholder='Click here to add a description.'
                >
                    {description}
                </h4>
            </div>
        </div>
    )
}

export default Description