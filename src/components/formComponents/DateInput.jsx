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
            <DatePicker wrapperClassName="w-28" className="w-28" selected={selectedValue} onChange={(date) => setSelectedValue(date)} />
        </div>
    )
}

export default DateInput