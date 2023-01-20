import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul className='nav-links'>
            <li className='link'><Link className='link-text' to='/'>Home</Link></li>
            <li className='link'><Link className='link-text' to='/intro-to-python'>Intro to Python</Link></li>
            <li className='link'><Link className='link-text' to='/web-dev'>Web Development</Link></li>
            <li className='link'><Link className='link-text' to='/game-dev'>Game Development</Link></li>
            <li className='link'><Link className='link-text' to='/data-analysis'>Data Analysis</Link></li>
        </ul>
    </nav>
  )
}

export default Nav