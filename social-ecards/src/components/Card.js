import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import classNames from 'classnames'
import { parse, format } from 'fecha'
import PropTypes from 'prop-types'
import LikeButton from './LikeButton'
import FollowButton from './FollowButton'
import { Link } from 'react-router-dom'
import ReactCardFlip from 'react-card-flip'

export default function ACard ({ card }) {
  let postedAt = card.posted_at
  if (typeof postedAt === 'string') {
    postedAt = parse(postedAt, 'isoDateTime')
  }
  postedAt = format(postedAt, 'MMM D, YYYY hh:mm A')

  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className='card'>
      <Card style={{ width: '40rem' }}>
        <FollowButton userId={card.user_id} />
        <p className='cardHeader'> Posted by:
          <em> <Link to='/profile/{card.user_id}'>{card.user} </Link></em>
             on {postedAt}
        </p>
        <Card.Body className={classNames({
          backgroundWhite: card.card_color === 'WH',
          backgroundRed: card.card_color === 'RD',
          backgroundOrange: card.card_color === 'OR',
          backgroundYellow: card.card_color === 'YE',
          backgroundGreen: card.card_color === 'GR',
          backgroundBlue: card.card_color === 'BL',
          backgroundTeal: card.card_color === 'TE',
          backgroundIndigo: card.card_color === 'IN',
          backgroundViolet: card.card_color === 'VI',
          backgroundBlack: card.card_color === 'BK',
          borderSolid: card.border_style === 0,
          borderDashed: card.border_style === 1,
          borderDotted: card.border_style === 2,
          borderDouble: card.border_style === 3,
          fontSansSerif: card.font_family === 'SS',
          fontSerif: card.font_family === 'SE',
          styleNormal: card.font_style === 'N',
          styleBold: card.font_style === 'B',
          styleItalics: card.font_style === 'I',
          styleUnderline: card.fontStyle === 'U',
          alignmentLeft: card.text_align === 'L',
          alignmentRight: card.text_align === 'R',
          alignmentCenter: card.text_align === 'C',
          alignmentJustified: card.text_align === 'J',
          fontSizeSmall: card.font_size === 0,
          fontSizeMedium: card.font_size === 1,
          fontSizeLarge: card.font_size === 2,
          fontSizeJumbo: card.font_size === 3
        })}
        >
          <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <Card.Text id='frontCard'>
              {card.inner_text}
              <button className='flipBtn' onClick={handleClick}><i className='fas fa-arrow-circle-right' /></button>
            </Card.Text>
            <Card.Text id='backCard'>
              {card.outer_text}
              {card.image && (
                <img src={card.image} alt='card' className='image' />
              )}
              <button className='flipBtn' onClick={handleClick}><i className='fas fa-arrow-circle-left' /></button>
            </Card.Text>

          </ReactCardFlip>
        </Card.Body>

      </Card>
      <i className='far fa-heart' /><Link to='/profile/{card.url}'> {card.liked_by} </Link>
      <LikeButton card={card.id} />

    </div>
  )
}

ACard.propTypes = {
  card: PropTypes.shape({
    user: PropTypes.string.isRequired,
    inner_text: PropTypes.string.isRequired,
    outer_text: PropTypes.string.isRequired
  }).isRequired
}
