import axios from 'axios'

const request = axios.create({
  // baseURL: 'need url from Kyle'
})

export function getToken (username, password) {
  return request.post('/api/auth/token/login', {
    username: username,
    password: password
  }).then(response => response.data.auth_token)
}
