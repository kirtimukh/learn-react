import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    name: '',
    email: '',
    birthdate: new Date(),
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
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setBirthdate: (state, action) => {
            state.birthdate = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload;
        },
        setEducationLevel: (state, action) => {
            state.educationLevel = action.payload;
        },
    },
});

// Export the actions and the reducer
export const { setName, setEmail, setBirthdate, setGender, setProfilePicture, setEducationLevel } = userProfileSlice.actions;
export default userProfileSlice.reducer;
