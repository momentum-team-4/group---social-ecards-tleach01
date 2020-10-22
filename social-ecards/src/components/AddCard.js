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
      title: '',
      outer_text: '',
      inner_text: '',
      cardColor: '',
      borderStyle: '',
      fontStyle: 'American Typewriter',
      textAlign: '',
      fontSize: '',
      created: false
    }
    this.handleOuterTextChange = this.handleOuterTextChange.bind(this)
    this.handleInnerTextChange = this.handleInnerTextChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleBorderChange = this.handleBorderChange.bind(this)
    this.handleFontChange = this.handleFontChange.bind(this)

    this.handleTextAlignChange = this.handleTextAlignChange.bind(this)
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOuterTextChange (event) {
    this.setState({ outertext: event.target.value })
  }

  handleInnerTextChange (event) {
    this.setState({ innertext: event.target.value })
  }

  handleTitleChange (event) {
    this.setState({ title: event.target.value })
  }

  handleColorChange (event) {
    this.setState({ cardColor: event.target.value })
  }

  handleBorderChange (event) {
    this.setState({ borderStyle: event.target.value })
  }

  handleFontChange (event) {
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
      .post('http://instaky.herokuapp.com/cards', {
        title: this.state.title,
        outer_text: this.state.outer_text,
        inner_text: this.state.inner_text,
        card_color: this.state.cardColor,
        border_style: this.state.borderStyle,
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
      return <Redirect to='/all/cards' />
    }
    return (
      <div>
        <h1 className='addHeader'> Add new cards!</h1>
        <Col>
          <div>
            <Card style={{ width: '25rem' }}>
              <Card.Body className={classNames({
                backgroundWhite: this.state.cardColor === 'white',
                backgroundRed: this.state.cardColor === 'red',
                backgroundOrange: this.state.cardColor === 'orange',
                backgroundYellow: this.state.cardColor === 'yellow',
                backgroundGreen: this.state.cardColor === 'green',
                backgroundBlue: this.state.cardColor === 'blue',
                backgroundTeal: this.state.cardColor === 'teal',
                backgroundIndigo: this.state.cardColor === 'indigo',
                backgroundViolet: this.state.cardColor === 'violet',
                backgroundBlack: this.state.cardColor === 'black',
                borderSolid: this.state.borderStyle === 'solid',
                borderDashed: this.state.borderStyle === 'dashed',
                borderDotted: this.state.borderStyle === 'dotted',
                borderDouble: this.state.borderStyle === 'double',
                fontComicSans: this.state.fontStyle === 'Comic Sans',
                fontPapyrus: this.state.fontStyle === 'Papyrus',
                fontWingdings: this.state.fontStyle === 'Wingdings',
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
                <Card.Title>{this.state.title}</Card.Title>
                <Card.Text>

                  {this.state.innertext}

                </Card.Text>

                <Card.Text>
                  {this.state.outertext}

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
                  <Form.Group controlId='addTitle'>
                    <Form.Control type='text' placeholder='Card name or title' value={this.state.title} onChange={this.handleTitleChange} required />
                  </Form.Group>

                  <Form.Group controlId='addCardInnerText'>
                    <Form.Control type='text' style={{ height: 100 }} placeholder='Front of card' value={this.state.innertext} onChange={this.handleInnerTextChange} />
                  </Form.Group>

                  <Form.Group controlId='addCardOuterText'>
                    <Form.Control type='text' style={{ height: 100 }} placeholder='Back of card' value={this.state.outertext} onChange={this.handleOuterTextChange} />
                  </Form.Group>

                  <Form.Group controlId='CardColor'>
                    <Form.Label>Card Color</Form.Label>
                    <Form.Control as='select' onChange={this.handleColorChange}>
                      <option value='white'>White</option>
                      <option value='red'>Red</option>
                      <option value='orange'>Orange</option>
                      <option value='yellow'>Yellow</option>
                      <option value='green'>Green</option>
                      <option value='blue'>Blue</option>
                      <option value='teal'>Teal</option>
                      <option value='indigo'>Indigo</option>
                      <option value='violet'>Violet</option>
                      <option value='black'>Black </option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='cardBorder'>
                    <Form.Label>Border Style</Form.Label>
                    <Form.Control as='select' onChange={this.handleBorderChange}>
                      <option value='solid'>Solid </option>
                      <option value='dashed'>Dashed </option>
                      <option value='dotted'>Dotted </option>
                      <option value='double'>Double </option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='cardFont'>
                    <Form.Label>Font Style</Form.Label>
                    <Form.Control as='select' onChange={this.handleFontChange}>
                      <option value='Comic Sans'>Comic Sans</option>
                      <option value='Papyrus'>Papyrus</option>
                      <option value='Wingdings'>Wingdings</option>
                      {/* add bold, italic, underlined */}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='textAlignment'>
                    <Form.Label>Text Alignment</Form.Label>
                    <Form.Control as='select' onChange={this.handleTextAlignChange}>
                      <option value='left'>Left</option>
                      <option value='right'>Right</option>
                      <option value='center'>Center</option>
                      <option value='justified'>Justified</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='fontSize'>
                    <Form.Label>Font Size</Form.Label>
                    <Form.Control as='select' onChange={this.handleFontSizeChange}>
                      <option value='small'>Small</option>
                      <option value='medium'>Medium</option>
                      <option value='large'>Large</option>
                      <option value='xxxtra large'>Jumbo</option>
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
