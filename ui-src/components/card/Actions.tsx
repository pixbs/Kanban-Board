import React from 'react';
import '../../styles/Actions.css'
import { ActionsProps } from '../../interfaces/props';
import { RemoveIcon, TimeIcon } from '../icons/Icons';
import SelectColumn from '../actions/SelectColumn';
import DueDate from '../actions/DueDate';
import Assignee from '../actions/Assignee';

function Actions(actions: ActionsProps) {
    if (!actions.columns) return <></>
    if (!actions.assignee) actions.assignee = { id: '', name: '', photoUrl: '' }

    return (
    <div className='actions'>
        <SelectColumn />
        <DueDate />
        <Assignee />
        <div className='remove_wrapper' onClick={actions.onRemove}>
            <RemoveIcon />
        </div>
    </div>
    )
}

export default Actions