import React from 'react'
import {
  Link
} from 'react-router-dom'

class Nav extends React.Component {
  render () {
    return (
      <div>
        <div className='navlinks'>
          <Link to='/profile'><p className='links'> Profile <i className='fas fa-user-circle' /></p></Link>
          <Link to='/add-card'><p className='links'> Add Cards <i className='far fa-plus-square' /></p></Link>
          <Link to='/all/cards'><p className='links'> Cards <i className='fas fa-layer-group' /></p></Link>
          <Link to='/followed/cards'> <p className='links'> Friends <i className='fas fa-users' /></p></Link>
          <Link to='/logout'><p className='links'> Logout <i className='fas fa-sign-out-alt' /></p></Link>
        </div>
      </div>
    )
  }
}

export default Nav
