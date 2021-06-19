import React, { Component } from 'react'
import Contact from '../contact'

class Contacts extends Component {
  constructor() {
    super()
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '+91-4235345243',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'janeS@gmail.com',
          phone: '+91-7576535433',
        },
        {
          id: 3,
          name: 'Karen Brooks',
          email: 'karen.brooks@gmail.com',
          phone: '+91-9567432633',
        },
      ],
    }
  }
  render() {
    const { contacts } = this.state
    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    )
  }
}

export default Contacts
