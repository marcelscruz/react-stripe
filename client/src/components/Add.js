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
      <div className="add">
        <div className="add__header">
          <h1>Add</h1>
        </div>
        <Form onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default Add
