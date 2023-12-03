import React, { useContext, useState } from "react";
import { CaretDownIcon, NextIcon } from "../icons/Icons";
import { CardContext } from "../card/Card";
import keyPressHandler from "../../utils/KeyPressHandler";

function Position() {

    const {card} = useContext(CardContext)
    const [display, setDisplay] = useState(false)

    if (!card.position) card.position = 0

    const displayPosition = (card.posLength && card.posLength > 1)

    return (
        <div 
            className="columns"
            style={{display: displayPosition ? 'flex' : 'none'}}
        >
            <div 
                className='dropdown' 
                tabIndex={0}
                onFocus={() => setDisplay(true)}
                onBlur={() => setDisplay(false)}
                onKeyDown={keyPressHandler}
            >
                <span>{`Position: ${card.position+1}`}</span>
                <CaretDownIcon />
                <Dropdown display={display}/>
            </div>
        </div>
    )



}

function Dropdown({display} : {display: boolean}) {
    const {card, columns, position} = useContext(CardContext)
    if (!card.posLength) card.posLength = 0
    const positions = Array.from({ length: card.posLength }, (_, i) => i); 

    const Options = () => {
        return <>{
            positions.map((_, index) =>
            <span 
                key={index}
                onClick={() => position(index)}
            >
                {card.position === index ? index+1 + " (current)" : index+1}
            </span>
        )}</>
    }

    return (
        <div 
            className='dropdown-list'
            style={{display: display ? 'flex' : 'none'}}
        >
            <Options />
        </div>
    )
}

export default Position