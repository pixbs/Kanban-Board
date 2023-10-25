import React, { useContext } from 'react';

const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "Novermber", "December"
]

interface DatePickerHeaderProps {
    currentYear : number
    currentMonth : number
    view : "day" | "month"
    setCurrentYear : (year : number) => void
    setCurrentMonth : (month : number) => void
    setView : (view : "day" | "month") => void
}


function DatepickerHeader({view,setView, currentYear, currentMonth, setCurrentYear, setCurrentMonth} : DatePickerHeaderProps) {

    const viewTitle = {
        day: `${monthNames[currentMonth]} ${currentYear}`,
        month: `${currentYear}`
    }

    const handleNext = () => {
        if(view === "month") {
            setCurrentYear(currentYear + 1)
            return
        }
        if (currentMonth === 11) {
            setCurrentYear(currentYear + 1)
        }
        const nextMonth = (currentMonth + 1) % 12
        setCurrentMonth(nextMonth)

    }

    const handlePrev = () => {
        if(view === "month") {
            setCurrentYear(currentYear - 1)
            return
        }
        if (currentMonth === 0) {
            setCurrentYear(currentYear - 1)
        }
        const prevMonth = currentMonth - 1 < 0 ? 11 : currentMonth - 1
        setCurrentMonth(prevMonth)

    }


    return(
        <div 
            className="datepicker-header"
        >
            <p 
                className="datepicker-day"
                children="<-" 
                onClick={handlePrev}
            />
            <h3
                onClick={() => setView("month")}
            >
                {viewTitle[view]}
            </h3>
            <p 
                className="datepicker-day"
                children="->" 
                onClick={handleNext}
            />
        </div>
    )
}

export default DatepickerHeader