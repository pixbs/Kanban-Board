import React, { useContext } from "react";
import { TimeIcon } from "../icons/Icons";
import { CardContext } from "../card/Card";

function DueDate() {

    const {card} = useContext(CardContext)

    return (
        <div className='wrapper date'>
            <TimeIcon />
            <span placeholder="Add due date">
                {card.date}
            </span>
        </div>
    )
}

export default DueDate