import React from 'react'

const Button = ({ label, handler }) => {
    return (
        <button
            className='border-slate-500 border-2 w-full'
            onClick={handler}
        >
            {label}
        </button>
    )
}

export default Button