import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'

class Edit extends Component {
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
        <h1>edit</h1>
        <Form customer={customer} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  customer: state.customers.find(
    customer => customer.id === props.match.params.id,
  ),
  all: state.customers,
})

export default connect(mapStateToProps)(Edit)
