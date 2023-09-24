import React, { useContext } from "react";
import { RemoveIcon } from "../icons/Icons";
import { CardContext } from "../card/Card";

function RemoveButton() {

    const {remove} = useContext(CardContext)

    return (
        <div className='remove_wrapper' onClick={remove}>
            <RemoveIcon />
        </div>
    )
}

export default RemoveButton