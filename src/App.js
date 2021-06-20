import React, { Component } from 'react'
import Contacts from './components/contacts'
import Header from './components/header'
import AddContact from './components/contact/AddContact'
import { Provider } from './context'

import './App.css'

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header branding="Connectly" />
          <AddContact />
          <Contacts />
        </div>
      </Provider>
    )
  }
}
export default App
