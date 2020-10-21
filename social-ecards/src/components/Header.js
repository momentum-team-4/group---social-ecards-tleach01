import React from 'react'
import {
  Link
} from 'react-router-dom'

import Login from './Login'
import Nav from './NavBar'

class Header extends React.Component {
  render () {
    return (
      <div>
        <div>
          {this.props.token
            ? (
              <div className='header'>
                <h1>Instaky</h1>
                <div className='navbar'>
                  <Nav />
                </div>
              </div>

            )
            : (
              <div>
                <div className='header'>
                  <h1>Instaky</h1>
                </div>

                <div>
                  <Login token={this.props.token} username={this.props.username} setToken={this.props.setToken} />
                </div>
              </div>
            )}
        </div>
      </div>
    )
  }
}
export default Header
