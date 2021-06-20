import React, { Component } from 'react'
import { Consumer } from '../../context'
import {
  Card,
  CardTitle,
  CardBody,
  FormGroup,
  Input,
  Label,
  InputButton,
} from './AddContactElements'
import uuid from 'uuid'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (dispatch, e) => {
    e.preventDefault()
    const { name, email, phone } = this.state

    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    }
    dispatch({ type: 'ADD_CONTACT', payload: newContact })

    this.setState({
      name: '',
      email: '',
      phone: '',
    })
  }

  render() {
    const { name, email, phone } = this.state

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value
          return (
            <Card>
              <CardTitle>Add Contact</CardTitle>
              <CardBody>
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      className="form-control"
                      value={name}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={phone}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                  <InputButton type="submit" value="Add contact" />
                </form>
              </CardBody>
            </Card>
          )
        }}
      </Consumer>
    )
  }
}
export default AddContact
