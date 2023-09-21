import React from 'react';
import '../../styles/Actions.css'
import { ActionsProps } from '../../interfaces/props';
import { CaretDownIcon, NextIcon, RemoveIcon, TimeIcon } from '../icons/Icons';

function Actions(actions: ActionsProps) {
    if (!actions.columns) return <></>
    if (!actions.assignee) actions.assignee = { id: '', name: '', photoUrl: '' }

    return (
    <div className='actions'>
        <div className='columns'>
            <div className='dropdown'>
                <span>{actions.columns[actions.columnIndex ? actions.columnIndex : 0]}</span>
                <CaretDownIcon />
            </div>
            <div className='next'>
                <NextIcon />
            </div>
        </div>
        <div className='wrapper date'>
            <TimeIcon />
            <span>{actions.date? actions.date : 'Select date'}</span>
        </div>
        <div className='wrapper assignee'>
            <img src={actions.assignee.photoUrl? actions.assignee.photoUrl : ''} alt='Assignee' className='Userpic'/>
            <span>{actions.assignee ? actions.assignee.name : 'Unassigned'}</span>
            <CaretDownIcon />
        </div>
        <div className='remove_wrapper'>
            <RemoveIcon />
        </div>
    </div>
    )
}

export default Actions