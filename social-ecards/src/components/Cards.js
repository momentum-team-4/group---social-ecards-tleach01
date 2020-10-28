import React, { useState, useEffect } from 'react'
import { getCards, getToken } from './api'
import Card from './Card'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'

export default function Cards (props) {
  const { token } = props
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [cardsErr, setCardsErr] = useState(null)

  function getMoreCards () {
    if (nextUrl && !loading) {
      setLoading(true)
      getToken(token, nextUrl).then(addCards).catch(handleError)
    }
  }

  function addCards (data) {
    setCards(cards.concat(data.results))
    setNextUrl(data.next)
    setLoading(false)
  }

  function handleError (error) {
    console.log({ error })
    setCardsErr(error)
    setNextUrl(null)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getCards(token).then(data => {
      setCards(data)
      setLoading(false)
    })
  }, [token])

  if (loading) {
    return <p>Loading your cards...</p>
  }
  return (
    <div className='cards'>
      <InfiniteScroll
        initialLoad={false}
        loadMore={getMoreCards}
        hasMore={nextUrl}
        loader={<p key={0}>Loading...</p>}
      >
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </InfiniteScroll>
      {cardsErr && (
        <p>There was an error loading the cards</p>
      )}
    </div>
  )
}

Cards.propTypes = {
  token: PropTypes.string.isRequired
}
