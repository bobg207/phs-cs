import React from 'react'
import Nav from './Nav.js'
import logo from '../images/bulldog.jpeg'

const Header = () => {
  return (
    <header>
      <div className='inner-wrapper'>
          <div className='logo-wrapper'>
              <img src={logo} alt='logo dog' className='logo' />
              <p className='name'>PHS CompSci</p>
          </div>
          <Nav />
      </div>
    </header>
  )
}

export default Header