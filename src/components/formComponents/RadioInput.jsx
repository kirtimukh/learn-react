import React from 'react'

const RadioInput = ({ className, inputLabel, radioOptions, selectedValue, setSelectedValue }) => {
    return (

        <div className={className}>
            <label>
                <strong>
                    {inputLabel}:
                </strong>
                <span>&nbsp; &nbsp;</span>
            </label>
            <div className='w-4/6 flex justify-between'>
                {
                    radioOptions.map((option, index) =>
                    (
                        <div key={option.id}>
                            <input
                                type="radio"
                                id={option.id}
                                value={option.value}
                                checked={
                                    selectedValue === option.value
                                }
                                onChange={() => setSelectedValue(option.value)}
                            />
                            <label htmlFor={option.id} >
                                {option.label}
                            </label>
                        </div>
                    )
                    )
                }
            </div>
        </div>

    )
}

export default RadioInput