import axios from 'axios'

const request = axios.create({
  baseURL: 'http://instaky.herokuapp.com/'
})

export function getToken (username, password) {
  return request.post('/auth/token/login/', {
    username: username,
    password: password
  }).then(response => response.data.auth_token)
}

export function getCard (token, id) {
  return request.get(`/cards/${id}/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(response => {
    return response.data
  })
}

export function getCards (token) {
  return axios.get('http://instaky.herokuapp.com/cards/all/', {
    headers: {
      Authorization: 'Token ' + token
    }
  }).then(res => res.data)
}

export function getMyCards (token) {
    return axios.get('http://instaky.herokuapp.com/cards/mine/', {
      headers: {
        Authorization: 'Token ' + token
      }
    }).then(res => res.data)
  }

export function getAllCards (token) {
  return request.get('/cards/all/', {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

export function getFollowedCards (token) {
  return request.get('/cards/all/', {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

export function getFollowing (token) {
  return request.get('/cards/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => {
    return res.data
  })
}
