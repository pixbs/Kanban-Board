import React from 'react';
import '../../styles/Description.css'
import { DescriptionIcon } from '../icons/Icons';

function Description({ description }: { description?: string }) {
    return (
        <div className='icon_wrapper'>
            <DescriptionIcon />
            <div className='content_wrapper'>
                <h3>Description</h3>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default Description