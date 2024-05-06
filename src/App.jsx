import React from 'react'

import './App.css'
import "react-datepicker/dist/react-datepicker.css";

import Navbar from './components/Navbar'
import ProfileForm from './components/ProfileForm'
import ReminderForm from './components/ReminderForm'
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
    educationLevel: 'Education',
    gender: 'Gender',
  }

  const [dataToEdit, setDataToEdit] = React.useState({})

  const dataEditor = {
    dataToEdit, setDataToEdit
  }

  const [formView, setFormView] = React.useState('profiler')

  return (
    <>
      <Navbar formView={formView} setFormView={setFormView} />
      {formView === 'profiler' ?
        <>
          <ProfileForm setProfileTable={setProfileTable} {...dataEditor} />
          <Table
            captionText={profileTableCaption}
            columnOrder={profileTableColumnOrder}
            tableKeys={profileTableKeys}
            data={profileTable}
            setTableData={setProfileTable}
            setDataToEdit={setDataToEdit}
          />
        </>
        :
        <ReminderForm />
      }
    </>
  )
}

export default App
