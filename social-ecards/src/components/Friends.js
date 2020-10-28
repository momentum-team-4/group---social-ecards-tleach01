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
    const { users, id } = this.state

    return (
      <div className='dib v-mid'>
        <h2 />
        <div>
          <h2>Below is the list of your friends on CardTalk</h2>
          {users.filter(user => user.id === 1).map((user, id) =>
            <ul key={user.id} className='cards'>
              <li><b>Followers:</b> {user.followers}</li>

            </ul>
          )}
        </div>
      </div>
    )
  }
}
