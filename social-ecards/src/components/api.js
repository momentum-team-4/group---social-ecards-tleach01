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

export function getCards (url, token) {
  return request.get(url, {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(response => {
    return response.data
  })
}

export function getMyCards (token) {
  return getCards('/cards/me/', token)
}

export function getAllCards (token) {
  return getCards('/cards/', token)
}
