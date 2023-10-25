import React, { useContext } from 'react';
import { CardContext } from '../card/Card';

interface DatePickerFooterProps {
    setCurrentYear : (year : number) => void
    setCurrentMonth : (month : number) => void
}

function DatePickerFooter({setCurrentYear, setCurrentMonth} : DatePickerFooterProps) {

    const {update} = useContext(CardContext)

    const handleToday = () => {
        setCurrentYear(new Date().getFullYear())
        setCurrentMonth(new Date().getMonth())
        update({date: new Date().toLocaleDateString("en-US", {month: 'short', day: '2-digit', year: 'numeric'})})
    }

    const handleClear = () => {
        setCurrentYear(new Date().getFullYear())
        setCurrentMonth(new Date().getMonth())
        update({date: undefined})
    }

    return(
        <div
            className="datepicker-footer"
        >
            <div 
                className="tertiary-button" 
                onClick={handleToday}
            >
                Today
            </div>
            <div
                className="tertiary-button" 
                onClick={handleClear}
            >
                Clear
            </div>
        </div>
    )
}

export default DatePickerFooter