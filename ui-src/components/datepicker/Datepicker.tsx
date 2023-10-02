import React, { useState, useContext } from "react"
import { CardContext } from "../card/Card";
import "../../styles/datepicker/Datepicker.css"

const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "Novermber", "December"
]

const dayName = [
    "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"
]

interface DatepickerProps {
    display : boolean
}

function Datepicker({display} : DatepickerProps) {
    const {card,update} = useContext(CardContext)
    
    const date = validDate(card.date)
    console.log(date + " is valid date")

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const [currentMonth, setCurrentMonth] = useState(date.getMonth())

    const handleToday = () => {
        setCurrentYear(new Date().getFullYear())
        setCurrentMonth(new Date().getMonth())
        update({date: new Date().toLocaleDateString("en-US", {month: 'short', day: '2-digit'})})
    }

    const handleClear = () => {
        setCurrentYear(new Date().getFullYear())
        setCurrentMonth(new Date().getMonth())
        update({date: undefined})
    }

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentYear(currentYear + 1)
        }
        const nextMonth = (currentMonth + 1) % 12
        setCurrentMonth(nextMonth)

    }

    const handleSelect = ( day : number) => {
        update({date: new Date(currentYear, currentMonth, day).toLocaleDateString("en-US", {month: 'short', day: '2-digit'})})
    }

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentYear(currentYear - 1)
        }
        const prevMonth = currentMonth - 1 < 0 ? 11 : currentMonth - 1
        setCurrentMonth(prevMonth)

    }

    return (
        <div 
            className="datepicker"
            style={{display: display ? 'block' : 'none'}}
        >
            <div 
                className="datepicker-header"
            >
                <p 
                    className="datepicker-day"
                    children="<-" 
                    onClick={handlePrevMonth}
                />
                <h3>
                    {monthNames[currentMonth]}
                </h3>
                <p 
                    className="datepicker-day"
                    children="->" 
                    onClick={handleNextMonth}
                />
            </div>
            <div 
                className="datepicker-content"
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
                            className={`datepicker-day ${isSameDay(currentMonth,day,card.date) ? "datepicker-day-selected" : ""}`}
                            onClick={() => handleSelect(day)}
                        >
                            {day}
                        </p>
                    )
                }
            </div>
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

export default Datepicker

function isSameDay(month: number, day: number, cardDate: string | undefined): boolean {
    if (!cardDate) {
      return false;
    }
    if (new Date(cardDate).getTime() !== new Date(cardDate).getTime()) {
        return false;
    }
    const compareDate = new Date(cardDate);

    const date = new Date(0, month, day); // Month is 0-indexed in JavaScript Date
  
    return (
      date.getMonth() === compareDate.getMonth() &&
      date.getDate() === compareDate.getDate()
    );
  }

function validDate(cardDate: string | undefined) {
    if (!cardDate) {
        console.log("no date")
        return new Date();
      }
      if (new Date(cardDate).getTime() !== new Date(cardDate).getTime()) {
            console.log(`invalid date ${cardDate}`)
            return new Date();
      }
      return new Date(cardDate);
}