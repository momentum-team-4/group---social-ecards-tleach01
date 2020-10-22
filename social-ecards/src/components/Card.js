import React from 'react'
import Card from 'react-bootstrap/Card'
import classNames from 'classnames'

export default function MyCard ({ card }) {
  return (
    <div>
      <Card style={{ width: '25rem' }}>
        <Card.Body className={classNames({
          backgroundWhite: this.state.cardColor === 'white',
          backgroundRed: this.state.cardColor === 'red',
          backgroundOrange: this.state.cardColor === 'orange',
          backgroundYellow: this.state.cardColor === 'yellow',
          backgroundGreen: this.state.cardColor === 'green',
          backgroundBlue: this.state.cardColor === 'blue',
          backgroundIndigo: this.state.cardColor === 'indigo',
          backgroundViolet: this.state.cardColor === 'violet',
          backgroundBlack: this.state.cardColor === 'black',
          borderSolid: this.state.borderStyle === 'solid',
          borderDashed: this.state.borderStyle === 'dashed',
          borderDotted: this.state.borderStyle === 'dotted',
          borderDouble: this.state.borderStyle === 'double',
          fontComicSans: this.state.fontStyle === 'comic sans',
          fontPapyrus: this.state.fontStyle === 'papyrus',
          fontWingdings: this.state.fontStyle === 'wingdings',
          alignmentLeft: this.state.textAlign === 'left',
          alignmentRight: this.state.textAlign === 'right',
          alignmentCenter: this.state.textAlign === 'center',
          alignmentJustified: this.state.textAlign === 'justified',
          fontSizeSmall: this.state.fontSize === 'small',
          fontSizeMedium: this.state.fontSize === 'medium',
          fontSizeLarge: this.state.fontSize === 'large',
          fontSizeJumbo: this.state.fontSize === 'xxxtra large'
        })}
        >
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            {card.outer_text}
            {card.inner_text}
          </Card.Text>
        </Card.Body>

      </Card>
      <p>{card.user}</p>

    </div>
  )
}
