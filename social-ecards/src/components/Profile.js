import React from 'react'
import MyDeck from './MyDeck'

class Profile extends React.Component {
  render () {
    return (

      <div className='profile'>
        <h1> Hello {this.props.username} !</h1>
        <div>Here is your deck!</div>
        <div className='myCards'>
          <MyDeck token={this.props.token} username={this.props.username} />
        </div>
      </div>
    )
  }
}

export default Profile
