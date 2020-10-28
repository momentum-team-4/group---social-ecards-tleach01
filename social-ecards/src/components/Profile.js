import React from 'react'
import MyDeck from './MyDeck'
import FollowButton from './FollowButton'
import { getUsers } from './api'

class Profile extends React.Component {
  render () {
    return (

      <div className='profile'>
        <h1> Hello {this.props.username} ! </h1>
        {/* <div>{users.profile_picture}</div> */}
        <h2><i className='far fa-clone' />Below are your cards... </h2>
        <div className='myCards'>
          <MyDeck token={this.props.token} username={this.props.username} />
        </div>
      </div>
    )
  }
}

export default Profile

