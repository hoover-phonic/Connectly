import React from 'react'
import PropTypes from 'prop-types'
import { Nav, NavbarContainer, NavLogo } from './HeaderElements'

const Header = ({ branding }) => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo>{branding}</NavLogo>
        </NavbarContainer>
      </Nav>
    </div>
  )
}

Header.defaultProps = {
  branding: 'My App',
}

Header.propTypes = {
  branding: PropTypes.string.isRequired,
}
export default Header
