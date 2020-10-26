import React, { useState } from 'react'
import { register } from './axios.js'
import { Redirect } from 'react-router-dom'

function Register (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)
  const { token, onRegister } = props

  if (token) {
    return <Redirect to='/' />
  }

  function registration (event) {
    event.preventDefault()

    register(username, password, email)
      .then(function (token) {
        setMessage('Welcome to CardTalk!')
        onRegister(token)
      })
  }

  return (
    <div>
      {message &&
        <div>
          {message}
        </div>}
      <div>Sign Up for CardTalk</div>
      <form onSubmit={registration} className='register'>
        <label
          htmlFor='username'
        />
        <input
          type='text'
          className='form'
          placeholder='Username'
          name='username'
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <label
          htmlFor='password'
        />
        <input
          type='password' className='form' placeholder='Password' name='password' value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <label
          htmlFor='email'
        />
        <input
          type='text' className='form' placeholder='Email' name='email' value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button className='formBtn' type='submit'>
            Register
        </button>
      </form>
    </div>
  )
}

export default Register
