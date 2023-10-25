import React, { useContext } from "react"
import { CardContext } from "../card/Card";

const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

interface MonthViewProps {
    currentYear : number
    currentMonth : number
    setCurrentMonth : (month : number) => void
    setView : (view : "day" | "month") => void
}

function MonthView({currentYear, currentMonth, setCurrentMonth, setView} : MonthViewProps) {

    const handleSelect = ( month : number) => {
        setCurrentMonth(month)
        setView("day")
    }

    const {card,update} = useContext(CardContext)

    return (
        <div
            className="datepicker-content month"
        >
            {monthNames.map((month,i) => <p
                className={`datepicker-day ${(currentMonth === i) ? "datepicker-day-selected" : ""}`}
                onClick={() => handleSelect(i)}
            >
                {month}
            </p>
            )}       
        </div>
    )
}

function isSameMonth(year : number, month : number, cardDate : string | undefined) {
    if (!cardDate) {
      return false;
    }
    if (new Date(cardDate).getTime() !== new Date(cardDate).getTime()) {
        return false;
    }
    const compareDate = new Date(cardDate);

    const date = new Date(year, month);
  
    return (
        date.getFullYear() === compareDate.getFullYear() &&
        date.getMonth() === compareDate.getMonth()
    );
}

export default MonthView