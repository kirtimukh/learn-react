import React, { useEffect } from 'react'
import {
    DateInput,
    FileInput,
    RadioInput,
    SelectInput,
    TextInput,
} from './formComponents/formInput'

import Button from './Button';

import { useDispatch, useSelector } from 'react-redux';
import {
    setName,
    setEmail,
    setBirthdate,
    setGender,
    setProfilePicture,
    setEducationLevel,
    resetForm
} from '../state/profileStore';


const ProfileForm = ({ setProfileTable }) => {
    const dispatch = useDispatch();

    const name = useSelector((state) => state.userProfile.name)
    const email = useSelector((state) => state.userProfile.email)
    const birthdate = useSelector((state) => state.userProfile.birthdate)
    const gender = useSelector((state) => state.userProfile.gender)
    const profilePicture = useSelector((state) => state.userProfile.profilePicture)
    const educationLevel = useSelector((state) => state.userProfile.educationLevel)

    useEffect(() => {
    }, [name, email, birthdate, gender, profilePicture, educationLevel])

    const nameSetter = (value) => {
        dispatch(setName(value))
    }
    const emailSetter = (value) => {
        dispatch(setEmail(value))
    }
    const birthdateSetter = (value) => {
        dispatch(setBirthdate(value))
    }
    const genderSetter = (value) => {
        dispatch(setGender(value))
    }
    const profilePictureSetter = (value) => {
        dispatch(setProfilePicture(value))
    }
    const educationLevelSetter = (value) => {
        dispatch(setEducationLevel(value))
    }


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

    const addToProfileTable = () => {
        if (
            name === ''
            || email === ''
            || gender === ''
            || educationLevel === ''
            || birthdate === ''
            || profilePicture === ''
        ) return

        const profile = {
            name,
            email,
            birthdate,
            profilePicture,
            gender,
            educationLevel,
        }
        setProfileTable((prevProfileTable) => [...prevProfileTable, profile])
        dispatch(resetForm())
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
                        onChangeHandler={nameSetter}
                    />
                    <TextInput
                        inputLabel='Email'
                        textType='email'
                        className={commonClassName}
                        placeholder='luffy@sunny.op'
                        textValue={email}
                        onChangeHandler={emailSetter}
                    />
                    <DateInput
                        className={commonClassName}
                        inputLabel='Birthdate'
                        selectedValue={birthdate}
                        setSelectedValue={birthdateSetter}
                    />
                    <RadioInput
                        className={commonClassName}
                        inputLabel='Gender'
                        radioOptions={genderOptions}
                        selectedValue={gender}
                        setSelectedValue={genderSetter}
                    />
                    <FileInput
                        inputLabel='Profile Picture'
                        className={commonClassName}
                        validExtensions={['jpeg', 'png', 'webp']}
                        handleFile={profilePictureSetter}
                    />
                    <SelectInput
                        className={commonClassName}
                        inputLabel='Education Level'
                        selectOptions={educationLevelOptions}
                        selectHandler={educationLevelSetter}
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