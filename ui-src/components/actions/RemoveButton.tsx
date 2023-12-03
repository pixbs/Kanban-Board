import React, { useContext } from "react";
import { RemoveIcon } from "../icons/Icons";
import { CardContext } from "../card/Card";

function RemoveButton() {

    const {remove} = useContext(CardContext)

    const handleKeyDown = (e : React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Enter') {
            remove()
        }
    }

    return (
        <div 
            className='remove_wrapper' 
            onClick={remove}
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            <RemoveIcon />
        </div>
    )
}

export default RemoveButton