import DatePicker from "react-datepicker";

import React from 'react'

const DateInput = ({ className, inputLabel, selectedValue, setSelectedValue }) => {
    return (
        <div className={className}>
            <label>
                <strong>
                    {inputLabel}:
                </strong>
                <span>&nbsp; &nbsp;</span>
            </label>
            <div className='w-4/6'>
                <DatePicker className='w-4/6' selected={selectedValue} onChange={(date) => setSelectedValue(date)} />
            </div>
        </div>
    )
}

export default DateInput