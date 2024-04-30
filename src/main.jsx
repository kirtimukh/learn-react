import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userProfileReducer from './state/profileStore';


const store = configureStore({
  reducer: {
    userProfile: userProfileReducer
  }
});


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
