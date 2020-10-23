import React from 'react'
import { getCard } from './api.js'
import Card from './Card'

class CardDisplay extends React.Component {
  constructor () {
    super()
    this.state = {
      card: {}
    }
  }

  componentDidMount () {
    getCard(this.props.token, this.props.id).then(card => this.setState({ card: card }))
    console.log('it is working')
  }

  render () {
    return (
      <Card card={this.state.card} />
    )
  }
}

export default CardDisplay
