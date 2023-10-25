import React, { useContext } from "react"
import { CardContext } from "../card/Card";

const dayName = [
    "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"
]

interface DayViewProps {
    currentYear : number
    currentMonth : number
}

function DayView({currentYear, currentMonth} : DayViewProps) {

    const {card,update} = useContext(CardContext)

    const handleSelect = ( day : number) => {
        update({date: new Date(currentYear, currentMonth, day).toLocaleDateString("en-US", {month: 'short', day: '2-digit', year: 'numeric'})})
    }

    return (
        <div 
            className="datepicker-content day"
        >
            {dayName.map(
                day => <p className="datepicker-day">{day}</p>
            )}
            {Array(getDayOffset(currentYear, currentMonth)).fill(0).map(
                () => <div/>
            )}
            {
                getDaysInMonth(currentYear, currentMonth + 1).map(
                    day => <p 
                        className={`datepicker-day ${isSameDay(currentYear,currentMonth,day,card.date) ? "datepicker-day-selected" : ""}`}
                        onClick={() => handleSelect(day)}
                    >
                        {day}
                    </p>
                )
            }
        </div>
    )
}

function getDaysInMonth(year: number, month: number): number[] {
    const daysInMonth: number[] = [];
    const date = new Date(year, month - 1, 1); // Month is 0-indexed in JavaScript Date
  
    while (date.getMonth() === month - 1) {
      daysInMonth.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }
  
    return daysInMonth;
  }

function getDayOffset(year : number, month: number) {
    return new Date(year, month, 0).getDay()
}

function isSameDay(year:number, month: number, day: number, cardDate: string | undefined): boolean {
    if (!cardDate) {
      return false;
    }
    if (new Date(cardDate).getTime() !== new Date(cardDate).getTime()) {
        return false;
    }
    const compareDate = new Date(cardDate);

    const date = new Date(year, month, day);
  
    return (
        date.getFullYear() === compareDate.getFullYear() &&
        date.getMonth() === compareDate.getMonth() &&
        date.getDate() === compareDate.getDate()
    );
}

export default DayView