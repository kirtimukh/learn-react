import React from 'react'

const SelectInput = ({ className, inputLabel, selectOptions, selectHandler }) => {
    return (
        <div className={className}>
            <label>
                <strong>
                    {inputLabel}:
                </strong>
                <span>&nbsp; &nbsp;</span>
            </label>
            <select className='w-4/6' onChange={(e) => selectHandler(e.target.value)}>
                {
                    selectOptions.map((option, index) => (
                        <option key={option.label} value={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectInput