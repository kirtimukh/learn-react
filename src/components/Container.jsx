import React, { useEffect, useState } from 'react'

import TextDisplay from './TextDisplay'
import Button from './Button'
import TextInput from './TextInput'


const Container = () => {
    const [messages, setMessages] = useState([])
    const emptyInputValue = { messenger: null, message: '' }
    const [inputMessage, setInputMessage] = useState(emptyInputValue)
    const [inputCount, setInputCount] = useState(0)

    const label = "Send"

    const buttonHandler = () => {
        if (inputMessage.message === '') return
        setMessages([...messages, inputMessage])
        setInputCount((prev) => prev + 1)
    }

    useEffect(() => {
        if (inputCount === 0) {
            setTimeout(() => {
                setMessages([...messages, { messenger: 'System', message: "Hello world .!" }])
            }, 1000)
            return
        }
        const message = inputMessage.message
        setTimeout(() => {
            setMessages([...messages, { messenger: 'System', message }])
        }, 1000)
        setInputMessage(emptyInputValue)
    }, [inputCount])

    return (
        <div>
            <div className='text-xl font-bold'>Messenger App</div>
            <div className='h-5'></div>
            <div className='h-3/6'>
                <div>
                    {
                        messages.map((message, index) => (
                            <TextDisplay key={index} message={message} />
                        ))
                    }
                </div>
                <div className='h-3'></div>

                <div className="border-2 border-slate-300">
                    <TextInput
                        placeholder='Enter message'
                        inputMessage={inputMessage}
                        setInputMessage={setInputMessage}
                        className='w-full text-center'
                    />
                    <Button label={label} handler={buttonHandler} />
                </div>
            </div>
        </div>
    )
}

export default Container