import React, { useContext } from "react";
import { CaretDownIcon, NextIcon } from "../icons/Icons";
import { CardContext } from "../card/Card";

function SelectColumn() {

    const {card, columns} = useContext(CardContext)

    const handleNext = () => {
        // const newIndex = actions.columnIndex ? actions.columnIndex + 1 : 1
        // if (newIndex > actions.columns.length - 1) return
        // actions.onMove(newIndex)
    }

    const currentColumn = columns[card.columnIndex || 0]

    return (
        <div className='columns'>
            <div className='dropdown'>
                <span>{currentColumn}</span>
                <CaretDownIcon />
            </div>
            <div className='next' onClick={handleNext}>
                <NextIcon />
            </div>
        </div>
    )
}

export default SelectColumn