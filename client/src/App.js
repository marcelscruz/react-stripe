import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

class App extends Component {
  state = {
    customers: [],
  }

  componentDidMount() {
    this.callApi()
  }

  callApi = async () => {
    axios
      .get('/customers')
      .then(async response => {
        // console.log(response)
        response.data.data.forEach(customer => {
          this.setState({ customers: [...this.state.customers, customer] })
          // console.log(customer)
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state.customers)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Stripe</h1>
        </header>
        {this.state.customers.map(customer => {
          return <h1 key={customer.id}>{customer.email}</h1>
        })}
      </div>
    )
  }
}

export default App
