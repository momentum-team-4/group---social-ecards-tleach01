import React, { useState, useEffect } from 'react'
import { getMyCards } from './api.js'
import Card from './Card'

export default function Cards (props) {
  const { token } = props
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    getMyCards(token).then(data => {
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

