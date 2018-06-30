import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

class App extends Component {
  state = {
    response: '',
  }

  componentDidMount() {
    this.callApi()
  }

  callApi = async () => {
    axios
      .get('/api/hello')
      .then(async response => {
        this.setState({ response: response.data.express })
      })
      .catch(error => {
        console.log(error)
      })
  }

  // callApi = async () => {
  //   const response = await fetch('/api/hello')
  //   const body = await response.json()

  //   if (response.status !== 200) throw Error(body.message)
  //   console.log(response)
  //   console.log(body)
  //   return body
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    )
  }
}

export default App
