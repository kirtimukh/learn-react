import React from 'react'

const TextInput = ({ inputLabel, className, textType, placeholder, textValue, onChangeHandler }) => {
    return (
        <div className={className}>
            <label>
                <strong>
                    {inputLabel}:
                </strong>
                <span>&nbsp; &nbsp;</span>
            </label>
            <input
                className='w-4/6'
                type={textType}
                placeholder={placeholder}
                value={textValue}
                onChange={(e) => onChangeHandler(e.target.value)}
            />
        </div>
    )
}

export default TextInput