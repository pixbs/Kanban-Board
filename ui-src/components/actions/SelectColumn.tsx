import React, { useContext, useState } from "react";
import { CaretDownIcon, NextIcon } from "../icons/Icons";
import { CardContext } from "../card/Card";

function SelectColumn() {

    const {card, columns, move} = useContext(CardContext)
    const [display, setDisplay] = useState(false)

    const handleNext = () => {
        const newIndex = card.columnIndex ? card.columnIndex + 1 : 1
        if (newIndex > columns.length - 1) return
        move(newIndex)
    }

    const currentColumn = columns[card.columnIndex || 0]

    return (
        <div className='columns'>
            <div 
                className='dropdown' 
                tabIndex={0}
                onFocus={() => setDisplay(true)}
                onBlur={() => setDisplay(false)}
            >
                <span>{currentColumn}</span>
                <CaretDownIcon />
                <Dropdown display={display}/>
            </div>
            <div className='next' onClick={handleNext}>
                <NextIcon />
            </div>
        </div>
    )
}

function Dropdown({display} : {display: boolean}) {
    const {card, columns, move} = useContext(CardContext)

    const Options = () => {
        return <>{
        columns.map((column, index) => 
            <span 
                key={index}
                onClick={() => {
                    move(index)
                }}
            >
                {column}
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

export default SelectColumn