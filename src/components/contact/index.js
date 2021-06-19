import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardList, ListItem } from './ContactElements'

class Contact extends React.Component {
  state = {
    showContactInfo: false,
  }

  onShowClick = (e) => {}

  render() {
    const { name, email, phone } = this.props.contact
    const { showContactInfo } = this.state
    return (
      <React.Fragment>
        <Card>
          <CardTitle>
            {name}{' '}
            <i
              onClick={() =>
                this.setState({ showContactInfo: !this.state.showContactInfo })
              }
              className="fas fa-sort-down"
            ></i>
          </CardTitle>
          {showContactInfo ? (
            <CardList>
              <ListItem>Email: {email}</ListItem>
              <ListItem>Phone: {phone}</ListItem>
            </CardList>
          ) : null}
        </Card>
      </React.Fragment>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact
