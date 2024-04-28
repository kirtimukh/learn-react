import React from 'react'

import './App.css'
import "react-datepicker/dist/react-datepicker.css";

import Container from './components/Container'
import ProfileForm from './components/ProfileForm'
import Table from './components/Table';

function App() {
  const [profileTable, setProfileTable] = React.useState([])
  const profileTableColumnOrder = ['profilePicture', 'name', 'email', 'birthdate', 'educationLevel', 'gender']
  const profileTableCaption = 'All registered profiles'
  const profileTableKeys = {
    profilePicture: 'Picture',
    name: 'Name',
    email: 'Email',
    birthdate: 'Birthdate',
    educationLevel: 'Education Level',
    gender: 'Gender'
  }
  return (
    <>
      <ProfileForm setProfileTable={setProfileTable} />
      <Table
        captionText={profileTableCaption}
        columnOrder={profileTableColumnOrder}
        tableKeys={profileTableKeys}
        data={profileTable}
      />
      {/* <Container /> */}
    </>
  )
}

export default App
