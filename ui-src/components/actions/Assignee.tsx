import React, { useContext } from "react";
import { CaretDownIcon, UserIcon } from "../icons/Icons";
import { CardContext } from "../card/Card";

function Assignee() {

    const {card} = useContext(CardContext)

    const image = card.assignee?.photoUrl ? 
        <img src={card.assignee.photoUrl} alt='Assignee'/> :
        <UserIcon />

    return (
        <div className='wrapper assignee'>
            {image}
            <span placeholder="Add assignee">
                {card.assignee}
            </span>
            <CaretDownIcon />
        </div>
    )
}

export default Assignee