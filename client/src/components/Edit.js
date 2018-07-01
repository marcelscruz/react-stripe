import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Form from './Form'

class Edit extends Component {
  // Receive customer object from Form
  onSubmit = customer => {
    const id = this.props.customer.id

    axios
      .put('/edit', { ...customer, id })
      .then(res => {
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  onDeleteCustomer = () => {
    const id = this.props.customer.id

    axios
      .delete('/delete', { data: { id } })
      .then(res => {
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { customer } = this.props

    return (
      <div className="edit">
        <div className="edit__header">
          <h1>Edit customer</h1>
          <button className="button" onClick={this.onDeleteCustomer}>
            Delete customer
          </button>
        </div>
        <Form customer={customer} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  customer: state.customers.find(
    customer => customer.id === props.match.params.id,
  ),
})

export default connect(mapStateToProps)(Edit)
