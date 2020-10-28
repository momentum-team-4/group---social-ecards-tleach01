import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import Card from 'react-bootstrap/Card'

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <div>
        {card.outer_text}
        <button onClick={handleClick}>Click</button>
      </div>

      <div>
        {card.inner_text}
        <button onClick={handleClick}>Click</button>
      </div>
    </ReactCardFlip>
  )
}
