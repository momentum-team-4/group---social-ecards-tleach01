import React, { useState, useEffect } from 'react'
import { getFollowedCards, getUsers } from './api.js'
import Card from './Card'
import FollowButton from './FollowButton'

export default function Cards (props) {
  const { token } = props
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    getFollowedCards(token).then(data => {
      setCards(data)
      setLoading(false)
    })
  }, [token])

  if (loading) {
    return <p>Loading your cards...</p>
  }
  return (
    <div className='cards'>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  )
}
