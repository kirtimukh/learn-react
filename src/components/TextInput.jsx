import React from 'react'

const TextInput = ({ placeholder, inputMessage, setInputMessage, className }) => {
    const handleChange = (e) => {
        setInputMessage({ messenger: 'User', message: e.target.value })
    }

    return (
        <div>
            <input
                className={className}
                type="text"
                placeholder={placeholder}
                value={inputMessage.message}
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
}

export default TextInput