import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    name: '',
    email: '',
    birthdate: '',
    gender: '',
    profilePicture: '',
    educationLevel: '',
};

// Create a slice for the user profile form
const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setName: (state, action) => {
            console.log('reName', action.payload)
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setBirthdate: (state, action) => {
            console.log('reDate', action.payload)
            state.birthdate = action.payload;
        },
        setGender: (state, action) => {
            console.log('reGen', action.payload)
            state.gender = action.payload;
        },
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload;
        },
        setEducationLevel: (state, action) => {
            state.educationLevel = action.payload;
        },
        resetForm: (state) => {
            state = initialState;
        }
    },
});

// Export the actions and the reducer
export const {
    setName,
    setEmail,
    setBirthdate,
    setGender,
    setProfilePicture, setEducationLevel, resetForm } = userProfileSlice.actions;
export default userProfileSlice.reducer;
