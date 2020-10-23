import React from 'react'
import Login from './Login'
import Nav from './NavBar'
import logo from './logo2.png'

class Header extends React.Component {
  render () {
    return (
      <div>
        <div>
          {this.props.token
            ? (
              <div>
                <h1 className='appheader'> <img src={logo} /> </h1>
                <div className='navbar'>
                  <Nav />
                </div>
              </div>

            )
            : (
              <div>
                <div>
                  <h1 className='appheader'> <img src={logo} /> </h1>
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
