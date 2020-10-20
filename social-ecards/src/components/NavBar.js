import React from 'react'
import {
  Link
} from 'react-router-dom'

class Nav extends React.Component {
  render () {
    return (
      <div>
        <div className='navlinks'>
          <Link to='/login'><p className='links'>Login</p></Link>
          <Link to='/profile'><p className='links'>Profile</p></Link>
          <Link to='/add-card'><p className='links'>New Cards</p></Link>
          <Link to='/all/cards'><p className='links'>All Cards</p></Link>
          <Link to='/followed/cards'> <p className='links'>Followed Cards</p></Link>
        </div>
      </div>
    )
  }
}

export default Nav
