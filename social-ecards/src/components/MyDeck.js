import React from 'react'
import { getMyCards } from './api.js'
import Cards from './Cards'

class MyDeck extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: []
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete (event) {
    this.setState({ card: {} })
  }

  componentDidMount () {
    getMyCards(this.props.token, this.props.username).then(cards => this.setState({ cards: cards }))
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.token && this.props.token !== prevProps.token) {
      getMyCards(this.props.token).then(cards => this.setState({ cards: cards }))
    }
  }

  render () {
    return (
      <Cards cards={this.state.cards} onDelete={this.handleDelete} />
    )
  }
}

export default MyDeck
