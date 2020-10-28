import React from 'react'
import { getUsers } from './api'

function Friend ({ users }) {
  return (
    <div>
      {users.followers}
    </div>
  )
}

export default Friend 
