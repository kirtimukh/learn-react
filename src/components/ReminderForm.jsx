import React from 'react'
import {
    DateInput,
    SelectInput,
    TextInput,
    TimeInput
} from './formComponents/formInput'
import Button from './Button';

import { reminderTypes, repeatTypes, priorityTypes } from '../constants/reminderConstants'

const ReminderForm = () => {
    const [reminderTitle, setReminderTitle] = React.useState('')
    const [reminderDate, setReminderDate] = React.useState(new Date())
    const [description, setDescription] = React.useState('')

    const [reminderType, setReminderType] = React.useState('')
    const [repeatType, setRepeatType] = React.useState('')
    const [priority, setPriority] = React.useState('')

    const commonClassName = 'flex'

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col w-3/6'>
                <div className='text-xl font-medium'>Reminder Form</div>
                <div className='spacer h-5 w-full'></div>
                <div className='flex flex-col'>
                    <TextInput
                        inputLabel='Title'
                        className={commonClassName}
                        textType='text'
                        placeholder='Groceries'
                        textValue={reminderTitle}
                        onChangeHandler={setReminderTitle}
                    />
                    <div className='spacer h-2 w-full'></div>
                    <div className='flex'>
                        <SelectInput
                            inputLabel='Type'
                            className='basis-1/3'
                            labelInside={true}
                            selectOptions={reminderTypes}
                            selectHandler={setReminderType}
                            selectedValue={reminderType}
                        />
                        <SelectInput
                            inputLabel={'Repeat'}
                            className='basis-1/3'
                            labelInside={true}
                            selectOptions={repeatTypes}
                            selectHandler={setRepeatType}
                            selectedValue={repeatType}
                        />
                        <SelectInput
                            inputLabel={'Priority'}
                            className='basis-1/3'
                            labelInside={true}
                            selectOptions={priorityTypes}
                            selectHandler={setPriority}
                            selectedValue={priority}
                        />
                    </div>
                    <div className='spacer h-2 w-full'></div>
                    <div className='flex'>
                        <DateInput
                            className='basis-1/2 flex flex-row'
                            inputLabel='Date'
                            selectedValue={reminderDate}
                            setSelectedValue={setReminderDate}
                        />
                        <TimeInput inputLabel='Time' className='basis-1/2 flex flex-row' />
                    </div>
                    <div className='spacer h-2 w-full'></div>
                    <TextInput
                        inputLabel='Description'
                        textType='text'
                        className={commonClassName}
                        placeholder='buy milk, eggs, and bread'
                        textValue={description}
                        onChangeHandler={setDescription}
                    />
                </div>
                <div className='spacer h-5 w-full'></div>

                <Button label='Save' handler={() => { console.log('reminder set') }} />

                {/* <div>
                    {Object.keys(dataToEdit).length ? <Button label='Edit' handler={editProfileData} /> : <Button label='Submit' handler={addToProfileTable} />}

                </div> */}
            </div>
        </div>

    )
}

export default ReminderForm