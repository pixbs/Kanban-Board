import React, { useContext, useState } from "react";
import { TimeIcon } from "../icons/Icons";
import { CardContext } from "../card/Card";
import keyPressHandler from "../../utils/KeyPressHandler";
import Datepicker from "../datepicker/Datepicker";

function DueDate() {

    const ref = React.createRef<HTMLSpanElement>()

    const {card, update} = useContext(CardContext)
    const [display, setDisplay] = useState(false)

    const handleTextBlur = (e: React.FormEvent<HTMLSpanElement>) => {
        const content = e.currentTarget.textContent
        if (!content) {
            update({date: undefined})
            return
        }
        const dueDate = new Date(content)
        if (dueDate.getTime() !== dueDate.getTime()) {
            e.currentTarget.innerText = card.date || ''
            return
        }
        update({date: dueDate.toLocaleDateString("en-US", {month: 'short', day: '2-digit'})})
    }

    return (
        <div className='wrapper date'
        tabIndex={0}
        onClick={() => ref.current?.focus()}
        onFocus={() => setDisplay(true)}
        onBlur={() => setDisplay(false)}
        >
            <TimeIcon />
            <span 
                placeholder="Due date"
                //contentEditable={true}     
                onKeyDown={keyPressHandler}
                ref={ref}
            >
                {card.date}
            </span>
            <Datepicker display={display}/>
        </div>
    )
}

export default DueDate