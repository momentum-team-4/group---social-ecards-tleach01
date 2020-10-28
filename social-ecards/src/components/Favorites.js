import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getFavorites } from './api'
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'

export default class Favorites extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      token: localStorage.getItem('login_auth_token'),
      favorites: [],
      users: []

    }
  }

  componentDidMount () {
    if (this.state.token) {
      getFavorites(this.state.token)
        .then(response =>
          this.setState({
            favorites: response.data
          }))
    }
  }

  render () {
    const { favorites } = this.state

    return (
      <div className='favorites'>
        <h1>Your Favorites</h1>
        <div>
          <ul>
            <div>
              {favorites.map((favorites) =>
                <ul>
                  <div>
                    <Link to='/cards/:id/'>
                      <li>{favorites.outer_text}</li>
                      <li>{favorites.inner_text} </li>
                      <li>Favorite of: {favorites.favorite_of}</li>
                    </Link>
                    <Link to=''>
                      <button />
                      <LikeButton cardId={favorites.id} />
                    </Link>
                  </div>
                </ul>
              )}
            </div>
            <div />
          </ul>
        </div>
      </div>
    )
  }
}
