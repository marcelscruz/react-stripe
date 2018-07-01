import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'

class Add extends Component {
  // Receive customer object from Form
  onSubmit = customer => {
    console.log(customer)
    axios
      .post('/add', customer)
      .then(res => {
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { customer } = this.props

    console.log('customer from props', customer)
    return (
      <div>
        <h1>Add</h1>
        <Form onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default Add
