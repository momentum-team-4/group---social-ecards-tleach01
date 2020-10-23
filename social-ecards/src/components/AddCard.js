import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import classNames from 'classnames'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class CardMaker extends React.Component {
  constructor () {
    super()
    this.state = {
      outer_text: '',
      inner_text: '',
      card_color: '',
      borderStyle: '',
      fontStyle: '',
      fontFamily: 'American Typewriter',
      textAlign: '',
      fontSize: '',
      created: false
    }
    this.handleOuterTextChange = this.handleOuterTextChange.bind(this)
    this.handleInnerTextChange = this.handleInnerTextChange.bind(this)

    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleBorderChange = this.handleBorderChange.bind(this)
    this.handleFontFamilyChange = this.handleFontFamilyChange.bind(this)
    this.handleFontStyleChange = this.handleFontStyleChange.bind(this)
    this.handleTextAlignChange = this.handleTextAlignChange.bind(this)
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOuterTextChange (event) {
    this.setState({ outer_text: event.target.value })
  }

  handleInnerTextChange (event) {
    this.setState({ inner_text: event.target.value })
  }

  handleColorChange (event) {
    this.setState({ card_color: event.target.value })
  }

  handleBorderChange (event) {
    this.setState({ borderStyle: event.target.value })
  }

  handleFontFamilyChange (event) {
    this.setState({ fontFamily: event.target.value })
  }

  handleFontStyleChange (event) {
    this.setState({ fontStyle: event.target.value })
  }

  handleTextAlignChange (event) {
    this.setState({ textAlign: event.target.value })
  }

  handleFontSizeChange (event) {
    this.setState({ fontSize: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    axios
      .post('http://instaky.herokuapp.com/cards/', {
        outer_text: this.state.outer_text,
        inner_text: this.state.inner_text,
        card_color: this.state.card_color,
        border_style: this.state.borderStyle,
        font_family: this.state.fontFamily,
        font_style: this.state.fontStyle,
        text_align: this.state.textAlign,
        font_size: this.state.fontSize
      },
      {
        headers: {
          Authorization: `Token ${this.props.token}`
        }
      }
      )
      .then(response =>
        this.setState({ created: true }))
  }

  render () {
    if (this.state.created) {
      return <Redirect to='/cards/' />
    }
    return (
      <div>
        <h1 className='addHeader'> Add new cards!</h1>
        <Col>
          <div>
            <Card style={{ width: '25rem' }}>
              <Card.Body className={classNames({
                backgroundWhite: this.state.card_color === 'WH',
                backgroundRed: this.state.card_color === 'RD',
                backgroundOrange: this.state.card_color === 'OR',
                backgroundYellow: this.state.card_color === 'YE',
                backgroundGreen: this.state.card_color === 'GR',
                backgroundBlue: this.state.card_color === 'BL',
                backgroundTeal: this.state.card_color === 'TE',
                backgroundIndigo: this.state.card_color === 'IN',
                backgroundViolet: this.state.card_color === 'VI',
                backgroundBlack: this.state.card_color === 'BK',
                borderSolid: this.state.borderStyle === '0',
                borderDashed: this.state.borderStyle === '1',
                borderDotted: this.state.borderStyle === '2',
                borderDouble: this.state.borderStyle === '3',
                fontSansSerif: this.state.fontFamily === 'SS',
                fontSerif: this.state.fontFamily === 'SE',
                styleNormal: this.state.fontStyle === 'N',
                styleBold: this.state.fontStyle === 'B',
                styleItalics: this.state.fontStyle === 'I',
                styleUnderline: this.state.fontStyle === 'U',
                alignmentLeft: this.state.textAlign === 'L',
                alignmentRight: this.state.textAlign === 'R',
                alignmentCenter: this.state.textAlign === 'C',
                alignmentJustified: this.state.textAlign === 'J',
                fontSizeSmall: this.state.fontSize === '0',
                fontSizeMedium: this.state.fontSize === '1',
                fontSizeLarge: this.state.fontSize === '2',
                fontSizeJumbo: this.state.fontSize === '3'
              })}
              >
                <Card.Text>

                  {this.state.inner_text}

                </Card.Text>

                <Card.Text>
                  {this.state.outer_text}

                </Card.Text>

              </Card.Body>

            </Card>
          </div>
        </Col>
        <Container fluid>
          <Row>
            <Col>
              <div>
                <Form onSubmit={this.handleSubmit}>

                  <Form.Group controlId='addCardInnerText'>
                    <Form.Control type='text' style={{ height: 100 }} placeholder='Front of card' value={this.state.inner_text} onChange={this.handleInnerTextChange} />
                  </Form.Group>

                  <Form.Group controlId='addCardOuterText'>
                    <Form.Control type='text' style={{ height: 100 }} placeholder='Back of card' value={this.state.outer_text} onChange={this.handleOuterTextChange} />
                  </Form.Group>

                  <Form.Group controlId='CardColor'>
                    <Form.Label>Card Color</Form.Label>
                    <Form.Control as='select' onChange={this.handleColorChange}>
                      <option value='WH'>White</option>
                      <option value='RD'>Red</option>
                      <option value='OR'>Orange</option>
                      <option value='YE'>Yellow</option>
                      <option value='GR'>Green</option>
                      <option value='BL'>Blue</option>
                      <option value='TE'>Teal</option>
                      <option value='IN'>Indigo</option>
                      <option value='VI'>Violet</option>
                      <option value='BK'>Black </option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='cardBorder'>
                    <Form.Label>Border Style</Form.Label>
                    <Form.Control as='select' onChange={this.handleBorderChange}>
                      <option value='0'>Solid </option>
                      <option value='1'>Dashed </option>
                      <option value='2'>Dotted </option>
                      <option value='3'>Double </option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='cardFont'>
                    <Form.Label>Font</Form.Label>
                    <Form.Control as='select' onChange={this.handleFontFamilyChange}>
                      <option value='SE'>Serif</option>
                      <option value='SS'>Sans-Serif</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='cardFontStyle'>
                    <Form.Label>Font Style</Form.Label>
                    <Form.Control as='select' onChange={this.handleFontStyleChange}>
                      <option value='N'>Normal</option>
                      <option value='B'>Bold</option>
                      <option value='I'>Italics</option>
                      <option value='U'>Underline</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='textAlignment'>
                    <Form.Label>Text Alignment</Form.Label>
                    <Form.Control as='select' onChange={this.handleTextAlignChange}>
                      <option value='L'>Left</option>
                      <option value='R'>Right</option>
                      <option value='C'>Center</option>
                      <option value='J'>Justified</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='fontSize'>
                    <Form.Label>Font Size</Form.Label>
                    <Form.Control as='select' onChange={this.handleFontSizeChange}>
                      <option value='0'>Small</option>
                      <option value='1'>Medium</option>
                      <option value='2'>Large</option>
                      <option value='3'>Jumbo</option>
                    </Form.Control>
                  </Form.Group>

                  <Button variant='outline-primary' type='submit' name='submit' value='Submit'>
                Add Card
                  </Button>
                </Form>

              </div>
            </Col>

          </Row>
        </Container>

      </div>
    )
  }
}

export default CardMaker
