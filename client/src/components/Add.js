import React, { Component } from 'react'
import Form from './Form'

class Add extends Component {
  // Receive customer object from Form
  onSubmit = customer => {
    console.log(customer)
    this.props.history.push('/')
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
