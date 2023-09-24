import React, { useContext } from "react";
import { TimeIcon } from "../icons/Icons";
import { CardContext } from "../card/Card";
import keyPressHandler from "../../utils/KeyPressHandler";

function DueDate() {

    const ref = React.createRef<HTMLSpanElement>()

    const {card, update} = useContext(CardContext)

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
        onClick={() => ref.current?.focus()}
        >
            <TimeIcon />
            <span 
                placeholder="Due date"
                contentEditable={true}
                onBlur={handleTextBlur}
                onKeyDown={keyPressHandler}
                ref={ref}
            >
                {card.date}
            </span>
        </div>
    )
}

export default DueDate