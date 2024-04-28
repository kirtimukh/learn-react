import React from 'react'
import {
    DateInput,
    FileInput,
    RadioInput,
    SelectInput,
    TextInput,
} from './formComponents/formInput'

import Button from './Button';


const ProfileForm = ({ setProfileTable }) => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [birthdate, setBirthdate] = React.useState(new Date())
    const [gender, setGender] = React.useState('')
    const genderOptions = [
        {
            id: 'male',
            value: 'male',
            label: 'male',
        },
        {
            id: 'female',
            value: 'female',
            label: 'female',
        },
        {
            id: 'other',
            value: 'other',
            label: 'other',
        }
    ]

    const [profilePicture, setProfilePicture] = React.useState('')

    const [educationLevel, setEducationLevel] = React.useState('')
    const educationLevelOptions = [
        {
            value: '10th',
            label: '10th',
        },
        {
            value: '12th',
            label: '12th',
        },
        {
            value: 'UG',
            label: 'UG',
        },
        {
            value: 'PG',
            label: 'PG',
        },
        {
            value: 'PhD',
            label: 'PhD',
        }
    ]

    const resetData = () => {
        setName('')
        setEmail('')
        setBirthdate(new Date())
        setGender('')
        setProfilePicture('')
        setEducationLevel('')
    }

    const addToProfileTable = () => {
        if (name === '' || email === '' || gender === '' || educationLevel === '' || birthdate === '' || profilePicture === '') return

        const profile = {
            name,
            email,
            birthdate,
            profilePicture,
            gender,
            educationLevel,
        }
        setProfileTable((prevProfileTable) => [...prevProfileTable, profile])
        resetData()
    }

    const commonClassName = 'flex justify-between'

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col w-3/6'>
                <div className='text-xl font-medium'>Profile Form</div>
                <div className='spacer h-5 w-full'></div>
                <div className='flex flex-col'>
                    <TextInput
                        inputLabel='Name'
                        className={commonClassName}
                        textType='text'
                        placeholder='md luffy'
                        textValue={name}
                        onChangeHandler={setName}
                    />
                    <TextInput
                        inputLabel='Email'
                        textType='email'
                        className={commonClassName}
                        placeholder='luffy@sunny.op'
                        textValue={email}
                        onChangeHandler={setEmail}
                    />
                    <DateInput
                        className={commonClassName}
                        inputLabel='Birthdate'
                        selectedValue={birthdate}
                        setSelectedValue={setBirthdate}
                    />
                    <RadioInput
                        className={commonClassName}
                        inputLabel='Gender'
                        radioOptions={genderOptions}
                        selectedValue={gender}
                        setSelectedValue={setGender}
                    />
                    <FileInput
                        inputLabel='Profile Picture'
                        className={commonClassName}
                        validExtensions={['jpeg', 'png', 'webp']}
                        handleFile={setProfilePicture}
                    />
                    <SelectInput
                        className={commonClassName}
                        inputLabel='Education Level'
                        selectOptions={educationLevelOptions}
                        selectHandler={setEducationLevel}
                    />
                </div>
                <div className='spacer h-5 w-full'></div>
                <div>
                    <Button label='Submit' handler={addToProfileTable} />
                </div>
            </div>
        </div>

    )
}

export default ProfileForm