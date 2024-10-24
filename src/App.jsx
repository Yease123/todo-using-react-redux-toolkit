import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import Form from './components/Form'
import { Provider } from 'react-redux'
import store from './app/store'

function App() {
  

  return (
    <Provider store={store}>
    <Form/>
    <Card/>
    </Provider>
  )
}

export default App
