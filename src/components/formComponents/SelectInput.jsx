import React from 'react'

const SelectInput = ({ className, inputLabel, selectOptions, selectHandler, labelInside, selectedValue }) => {
    return (
        <div className={className}>
            {
                !labelInside ?
                    <label>
                        <strong>
                            {inputLabel ? `${inputLabel}:` : ''}
                        </strong>
                        <span>&nbsp; &nbsp;</span>
                    </label>
                    :
                    ''
            }

            <select
                className='w-4/6' value={selectedValue} onChange={(e) => selectHandler(e.target.value)}>
                {
                    labelInside ?
                        <option disabled value=''>
                            {inputLabel}
                        </option>
                        :
                        null
                }
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