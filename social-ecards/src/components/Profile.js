import React from 'react'

class Profile extends React.Component {
  render () {
    return (

      <div className='profile'>
        <h1> Hello {this.props.username} !</h1>
        <div className='myCards'>
          <p>Let's see if this works!!!!</p>
        </div>
      </div>
    )
  }
}

export default Profile
