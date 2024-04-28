import React, { useState } from 'react'

const TextDisplay = ({ message }) => {

    return (
        <div
            className='border-slate-50'
        >
            <strong>{message.messenger}</strong>: {message.message}
        </div>
    )
}

export default TextDisplay