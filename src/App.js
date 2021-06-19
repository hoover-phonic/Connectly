import React, { Component } from 'react'
import Contact from './components/Contact'
import Header from './components/Header'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <Contact
          name="John Doe"
          email="johndo@gmail.com"
          phone="423-4234-4232"
        />
        <Contact
          name="Jane Smith"
          email="janeS@gmail.com"
          phone="4863-423-2532"
        />
      </div>
    )
  }
}
export default App
