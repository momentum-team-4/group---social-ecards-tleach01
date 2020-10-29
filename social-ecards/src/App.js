import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Header from './components/Header'
import Logout from './components/Logout'
import Profile from './components/Profile'
import CardMaker from './components/AddCard'
import Cards from './components/Cards'
import Friends from './components/Friends'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token'),
      username: window.localStorage.getItem('login_username') || ''
    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout (event) {
    this.setState({ token: null, username: '' })
    window.localStorage.removeItem('login_auth_token')
    window.localStorage.removeItem('login_username')
  }

  render () {
    return (
      <Router>
        <header>
          <div>
            <Header token={this.state.token} setToken={token => this.setState({ token: token })} username={this.state.username} />
          </div>
        </header>
        <Switch>
          <Route path='/' exact component={Home}> </Route>
          <Route path='/login' exact component={Login}> Login </Route>
          <Route path='/logout/'><Logout onLogout={this.handleLogout} /></Route>
          <Route path='/profile'> <Profile token={this.state.token} username={this.state.username} /></Route>
          <Route path='/add-card'> <CardMaker token={this.state.token} username={this.state.username} Add Card /> </Route>
          <Route path='/all/cards'> <Cards token={this.state.token} username={this.state.username} /> </Route>
          <Route path='/followed/cards'> <Friends token={this.state.token} />  </Route>
          <Route path='/friends'> <Friends token={this.state.token} />  </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
