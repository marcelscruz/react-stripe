import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'

class Add extends Component {
  // Receive customer object from Form
  onSubmit = customer => {
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
    return (
      <div>
        <h1>Add</h1>
        <Form onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default Add
