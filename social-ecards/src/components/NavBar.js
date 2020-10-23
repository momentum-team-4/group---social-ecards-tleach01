import React from 'react'
import {
  Link
} from 'react-router-dom'

class Nav extends React.Component {
  render () {
    return (
      <div>
        <div className='navlinks'>
          <Link to='/profile'><p className='links'>Profile <i class="fas fa-user-circle"></i></p></Link>
          <Link to='/add-card'><p className='links'>Add Cards <i class="far fa-plus-square"></i></p></Link>
          <Link to='/all/cards'><p className='links'>All Cards <i class="fas fa-layer-group"></i></p></Link>
          <Link to='/followed/cards'> <p className='links'>Followed Cards <i class="fas fa-chalkboard-teacher"></i></p></Link>
          <Link to='/logout'><p className='links'>Logout <i class="fas fa-sign-out-alt"></i></p></Link>
        </div>
      </div>
    )
  }
}

export default Nav
