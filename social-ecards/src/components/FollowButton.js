import React from 'react'
import axios from 'axios';
import Cards from './Cards'

export default class FollowButton extends React.Component {
    constructor(props){
        super(props);
  this.state = {
    followers: false,
    users: [], 
    token: localStorage.getItem('login_auth_token')
  }
  this.toggleFollow=this.toggleFollow.bind(this)

}

toggleFollow() {
    this.setState((followers) => ({ followers: !this.state.followers }))
}

handleSubmit = e => {
    axios.post('http://instaky.herokuapp.com/users/following/', this.state, {
        headers: {
            Authorization: `Token ${this.state.token}`
        }
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

handleFollowing = e => {
    const {usersId} = this.props
    axios.get(`http://instaky.herokuapp.com/users/following/`, {
      headers: {
        Authorization: `Token ${this.state.token}`
      }
    })
    .then(response => {
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { usersId } = this.props
    const followers = this.state.followers;
    if (followers === null) {
      return (
        <div>
          <button
            
            className="followBtn"
            onClick= {() => {
                this.toggleFollow();
                this.handleFollowing();
            }}>
            <i className="fas fa-user-plus"></i>
          </button>
        </div>
      )
    }
    if (followers === true) {
      return (
        <div>
          <button 
            usersId='followers.id'
            className="button" 
            onClick= {() => {
                this.toggleFollow();
                this.handleFollowing();
            }}>
            <i class="fas fa-user-plus"></i>
          </button>
        </div>
      );
    }
    if (followers === false)
     {
      return (
        <div>
        <button
          className="button"
          onClick= {() => {
            this.toggleFollow();
            this.handleFollowing();
            }}>
        <i className="fas fa-user-plus"></i>
        </button>
      </div>
      )
    }
  }
}
