import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class CommentMaker extends React.Component {
  constructor () {
    super()
    this.state = {
      body: ''
    }
    this.handleCommentChange = this.handleCommentChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCommentChange (event) {
    this.setState({ body: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    axios
      .post('http://instaky.herokuapp.com/comments/', {
        body: this.state.body
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
        <h1 className='addHeader'> Add new comments!</h1>
        <Col>
          <div>
            <Card style={{ width: '25rem' }}>
              <Card.Body className='comments'>
                <Card.Text>

                  {this.state.body}

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

                  <Form.Group controlId='addCommentText'>
                    <Form.Control type='text' style={{ height: 100 }} placeholder='Front of card' value={this.state.inner_text} onChange={this.handleInnerTextChange} />
                  </Form.Group>

                  <Button variant='outline-primary' type='submit' name='submit' value='Submit'>
                Add Comment
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

export default CommentMaker
