import React from 'react'
import Cards from './Cards'
import { getFollowedCards, getFollowing } from './api'

class FollowedCards extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: [],
      followingFriends: []
    }
  }

  componentDidMount () {
    getFollowedCards(this.props.token).then(cards => this.setState({ cards: cards }))
    getFollowing(this.props.token).then(followingFriends => ({ followingFriends: followingFriends }))
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.token && this.props.token !== prevProps.token) {
      getFollowedCards(this.props.token).then(cards => this.setState({ cards: cards }))
    }
  }

  render () {
    return (
      <div>
        <h2>Friends Cards</h2>
        {this.state.followingFriends.map(followingFriend =>
          <p key={followingFriend.id}> {followingFriend}</p>)}
        <div>
          <Cards cards={this.state.cards} />
        </div>
      </div>
    )
  }
}

export default FollowedCards
