import React from 'react';
import '../../styles/Actions.css'
import SelectColumn from '../actions/SelectColumn';
import DueDate from '../actions/DueDate';
import Assignee from '../actions/Assignee';
import RemoveButton from '../actions/RemoveButton';
import Position from '../actions/Position';

function Actions() {
    return (
    <div className='actions'>
        <SelectColumn />
        <DueDate />
        <Assignee />
        <Position />
        <RemoveButton />
    </div>
    )
}

export default Actions