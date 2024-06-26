import React, { useEffect } from 'react'
import {
    DateInput,
    FileInput,
    RadioInput,
    SelectInput,
    TextInput,
} from './formComponents/formInput'

import Button from './Button';


const ProfileForm = ({ setProfileTable, dataToEdit, setDataToEdit }) => {
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

    const [educationLevel, setEducationLevel] = React.useState('10th')
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
        setEducationLevel('10th')
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

    useEffect(() => {
        if (Object.keys(dataToEdit).length) {
            setName(dataToEdit.name)
            setEmail(dataToEdit.email)
            setBirthdate(dataToEdit.birthdate)
            setGender(dataToEdit.gender)
            setProfilePicture(dataToEdit.profilePicture)
            setEducationLevel(dataToEdit.educationLevel)
        }
    }, [dataToEdit])

    const editProfileData = () => {
        if (name === '' || email === '' || gender === '' || educationLevel === '' || birthdate === '' || profilePicture === '') return

        const profile = {
            name,
            email,
            birthdate,
            profilePicture,
            gender,
            educationLevel,
        }
        setProfileTable((prevProfileTable) => {
            const newData = [...prevProfileTable]
            newData[dataToEdit.editIndex] = profile
            return newData
        })
        setDataToEdit({})
        resetData()
    }

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
                        labelInside={false}
                        selectOptions={educationLevelOptions}
                        selectHandler={setEducationLevel}
                    />
                </div>
                <div className='spacer h-5 w-full'></div>

                <div>
                    {Object.keys(dataToEdit).length ? <Button label='Edit' handler={editProfileData} /> : <Button label='Submit' handler={addToProfileTable} />}

                </div>
            </div>
        </div>

    )
}

export default ProfileForm