import React, { Component } from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      }
    case 'ADD_CONTACT':
      return {
         ...state,
        contacts: [action.payload, ...state.contacts],
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
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
    dispatch: (action) => {
      this.setState((state) => reducer(state, action))
    },
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
