import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardList, ListItem } from './ContactElements'
import { Consumer } from '../../context'
class Contact extends React.Component {
  state = {
    showContactInfo: false,
  }

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id })
  }

  render() {
    const { id, name, email, phone } = this.props.contact
    const { showContactInfo } = this.state
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value
          return (
            <React.Fragment>
              <Card>
                <CardTitle>
                  {name}{' '}
                  <i
                    onClick={() =>
                      this.setState({
                        showContactInfo: !this.state.showContactInfo,
                      })
                    }
                    className="fas fa-sort-down"
                    style={{ cursor: 'pointer' }}
                  ></i>
                  <i
                    className="fas fa-times"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: '#B73239',
                    }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  ></i>
                </CardTitle>
                {showContactInfo ? (
                  <CardList>
                    <ListItem>
                      <i className="fa fa-envelope" aria-hidden="true"></i>{' '}
                      Email: {email}
                    </ListItem>
                    <ListItem>
                      <i className="fa fa-mobile" aria-hidden="true"></i> Phone:{' '}
                      {phone}
                    </ListItem>
                  </CardList>
                ) : null}
              </Card>
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact
