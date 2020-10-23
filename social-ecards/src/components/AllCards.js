import React from 'react'
import { getAllCards } from './api.js'
import Cards from './Cards'

class AllCards extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount () {
    getAllCards(this.props.token).then(cards => this.setState({ cards: cards }))
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.token && this.props.token !== prevProps.token) {
      getAllCards(this.props.token).then(cards => this.setState({ cards: cards }))
    }
  }

  render () {
    return (
      <Cards cards={this.state.cards} />
    )
  }
}

export default AllCards
