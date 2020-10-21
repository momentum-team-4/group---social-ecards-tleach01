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
  return request.get(`/api/cards/${id}/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(response => {
    return response.data
  })
}
