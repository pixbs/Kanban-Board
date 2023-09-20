import React from 'react';
import { TitleIcon } from './Icons';
import '../styles/Title.css';

function Title({name} : {name: string}) {
    return (
        <div className="icon_wrapper">
            <TitleIcon />
            <span className='Name'>{name}</span>
        </div>
    )
}

export default Title