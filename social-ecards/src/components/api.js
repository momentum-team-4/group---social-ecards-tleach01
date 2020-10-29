import axios from 'axios'

const request = axios.create({
  baseURL: 'https://instaky.herokuapp.com/'
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
  return axios.get('https://instaky.herokuapp.com/cards/all/', {
    headers: {
      Authorization: 'Token ' + token
    }
  }).then(res => res.data)
}

export function deleteACard (token, id) {
  return request.delete(`/cards/${id}/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

export function getMyCards (token) {
  return axios.get('https://instaky.herokuapp.com/cards/mine/', {
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
  return request.get('/cards/following/', {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}
export function getFollowing (token) {
  return request.get('/users/following/', {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

export function getFriends (token) {
  return request.get('/users/following/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(response => {
    return response.data.results
  })
}

export function getUsers (token) {
  return request.get('/users/', {
    headers: {
      Authorization: `Token ${token}`
    }
  })
}

export function getComment (token, id) {
  return request.get(`/comment/${id}/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(response => {
    return response.data
  })
}

export function register (username, password) {
  return axios.post('https://instaky.herokuapp.com/auth/users/', {
    username: username,
    password: password
  })
    .then(res => res.token)
}

export function uploadImage (token, cardUrl, image) {
  return axios.put(cardUrl + 'image/', image, {
    headers: {
      Authorization: 'Token ' + token,
      'Content-Type': image.type,
      'Content-Disposition': `attachment; filename=${image.name}`
    }
  }).then(res => res.data)
}
