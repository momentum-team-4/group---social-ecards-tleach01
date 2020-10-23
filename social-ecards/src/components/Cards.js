import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export default function Cards ({ cards }) {
  console.log(cards)

  return (

    <div className='cards'>
      <Row>
        {cards.map(card => {
          return (
            <div key={card.id}>
              <Col>
                <Link to={`/card/${card.id}`}>
                  <Card style={{ width: '25rem' }} key={card.url}>
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
                      borderSolid: card.borderStyle === '0',
                      borderDashed: card.borderStyle === '1',
                      borderDotted: card.borderStyle === '2',
                      borderDouble: card.borderStyle === '3',
                      fontSansSerif: card.fontFamily === 'SS',
                      fontSerif: card.fontFamily === 'SE',
                      styleNormal: card.fontStyle === 'N',
                      styleBold: card.fontStyle === 'B',
                      styleItalics: card.fontStyle === 'I',
                      styleUnderline: card.fontStyle === 'U',
                      alignmentLeft: card.textAlign === 'L',
                      alignmentRight: card.textAlign === 'R',
                      alignmentCenter: card.textAlign === 'C',
                      alignmentJustified: card.textAlign === 'J',
                      fontSizeSmall: card.fontSize === '0',
                      fontSizeMedium: card.fontSize === '1',
                      fontSizeLarge: card.fontSize === '2',
                      fontSizeJumbo: card.fontSize === '3'
                    })}
                    >
                      <Card.Text>
                        {card.inner_text}
                      </Card.Text>
                      <Card.Text>
                        {card.outer_text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
                <div>
                  <p>{card.user}</p>
                </div>
              </Col>
            </div>
          )
        })}
      </Row>
    </div>
  )
}
