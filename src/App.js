import React, { Component } from 'react'
import Contacts from './components/contacts'
import Header from './components/header'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <Contacts />
      </div>
    )
  }
}
export default App
