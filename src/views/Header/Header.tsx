import * as React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

class Header extends React.PureComponent {
  render() {
    const logo = require('../../assets/logo.svg')

    return (
      <div className='Header'>
        <header className='o-wrapper'>
          <div className='o-flex o-flex--middle o-flex--justifize'>
            <img src={logo} className='App-logo' alt='logo' />
            <div className='o-flex o-flex--justifize o-flex--middle'>
              <div className='c-nav'><NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink></div>
              <div className='c-nav'><NavLink activeClassName='is-active' to='/about'>About</NavLink></div>
            </div>
           </div>
        </header>
      </div>
    )
  }
}

export default Header
