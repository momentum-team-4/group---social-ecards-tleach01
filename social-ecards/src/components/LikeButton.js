import React from 'react'
import axios from 'axios';
import Cards from './Cards'

export default class HeartButton extends React.Component {
    constructor(props){
        super(props);
  this.state = {
    liked_by: false,
    users: [], 
    token: localStorage.getItem('login_auth_token')
  }
  this.toggleLike=this.toggleLike.bind(this)

}

toggleLike() {
    this.setState((liked_by) => ({ liked_by: !this.state.liked_by }))
}

handleSubmit = e => {
    axios.post('http://instaky.herokuapp.com/cards/like', this.state, {
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

handleLikedCard = e => {
    const {cardId} = this.props
    axios.get(`http://instaky.herokuapp.com/cards/like`, this.state, {
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
    const { cardId } = this.props
    const liked_by = this.state.liked_by;
    if (liked_by === null) {
      return (
        <div>
          <button
            
            className="button"
            onClick= {() => {
                this.toggleLike();
                this.handleLikedCard();
            }}>
            <i className='far fa-heart' />
          </button>
        </div>
      )
    }
    if (liked_by === true) {
      return (
        <div>
          <button 
            cardId='liked_by.id'
            className="button" 
            onClick= {() => {
                this.toggleLike();
                this.handleLikedCard();
            }}>
            <i className='far fa-heart' />
          </button>
        </div>
      );
    }
    if (liked_by === false)
     {
      return (
        <div>
        <button
          className="button"
          onClick= {() => {
            this.toggleLike();
            this.handleLikedCard();
            }}>
        <i className='far fa-heart' />
        </button>
      </div>
      )
    }
  }
}
