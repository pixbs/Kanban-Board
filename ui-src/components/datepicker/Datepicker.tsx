import React, { useState, useContext, useEffect } from "react"
import { CardContext } from "../card/Card";
import "../../styles/datepicker/Datepicker.css"
import DayView from "./DayView";
import DatePickerFooter from "./DatepickerFooter";
import DatepickerHeader from "./DatepickerHeader";
import MonthView from "./MonthView";

interface DatepickerProps {
    display : boolean
}

function Datepicker({display} : DatepickerProps) {
    const {card,update} = useContext(CardContext)
    
    const date = validDate(card.date)
    
    const [currentMonth, setCurrentMonth] = useState(0)
    const [currentYear, setCurrentYear] = useState(0)
    const [view, setView] = useState<"day"|"month">("day")
    
    useEffect(() => {
        setCurrentMonth(date.getMonth())
        setCurrentYear(date.getFullYear())
    }, [card.date])

    const views = {
        day: <DayView currentYear={currentYear} currentMonth={currentMonth}/>,
        month: <MonthView currentYear={currentYear} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} setView={setView}/>
    }

    return (
        <div 
            className="datepicker"
            style={{display: display ? 'block' : 'none'}}
        >
            <DatepickerHeader view={view} setView={setView} currentYear={currentYear} currentMonth={currentMonth} setCurrentYear={setCurrentYear} setCurrentMonth={setCurrentMonth}/>
            {views[view]}
            <DatePickerFooter setCurrentYear={setCurrentYear} setCurrentMonth={setCurrentMonth}/>
        </div>
    )
}

export default Datepicker

function validDate(cardDate: string | undefined) {
    if (!cardDate) {
        return new Date();
      }
      const date = new Date(cardDate);
      if (date.getTime() !== date.getTime()) {
            return new Date();
      }
      return new Date(date);
}