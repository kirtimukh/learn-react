import DatePicker from "react-datepicker";

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const DateInput = ({ className, inputLabel, selectedValue, setSelectedValue }) => {
    const dateParser = (dateString) => {
        let selectedDate;
        if (selectedValue) {
            selectedDate = dateString.split(' ')
        } else {
            let today = new Date()
            selectedDate = [today.getFullYear(), today.getMonth(), today.getDate()]
        }
        return new Date(selectedDate[0], selectedDate[1], selectedDate[2])
    }

    const [selectedDate, setSelectedDate] = React.useState('')

    useEffect(() => {
        setSelectedDate(dateParser(selectedValue))
    }, [selectedValue])

    return (
        <div className={className}>
            <label>
                <strong>
                    {inputLabel}:
                </strong>
                <span>&nbsp; &nbsp;</span>
            </label>
            <div className='w-4/6'>
                <DatePicker
                    className='w-4/6'
                    selected={selectedDate}
                    onChange={(date) => {
                        setSelectedValue(`${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`)
                    }}
                />
            </div>
        </div>
    )
}

export default DateInput