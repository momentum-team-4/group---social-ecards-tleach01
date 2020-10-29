import React from 'react'
import { getUsers } from './api.js'

export default class Friends extends React.Component {
  constructor () {
    super()
    this.state = {
      users: [],
      cards: [],
      token: localStorage.getItem('login_auth_token')
    }
  }

  componentDidMount () {
    if (this.state.token) {
      getUsers(this.state.token)
        .then(response =>
          this.setState({ users: response.data.results }))
    }
    console.log(this.setState.users)
  }

  render () {
    const { users } = this.state

    return (
      <div className='dib v-mid'>
        <div>
          <h2>Below are your followers on CardTalk</h2>
          {users.filter(user => user.id === 1).map((user, id) =>
            <ul key={user.id} className='followers'>
              <li><b>Follower:</b> {user.username}</li>
              <li><img src={user.profile_picture} alt='profile' className='followImage' /></li>
              <li>{user.url}</li>

            </ul>
          )}
        </div>
      </div>
    )
  }
}
