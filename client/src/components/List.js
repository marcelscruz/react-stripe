import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCustomers } from '../actions/customers'
import axios from 'axios'
import ListItem from './ListItem'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: true,
    }
  }

  // Fetch and dispatch the customers list
  fetchUsers() {
    axios
      .get('/customers')
      .then(res => {
        this.props.setCustomers(res.data.data)
        this.setState({ isFetching: false })
      })
      .catch(error => {
        console.log(error)
      })
  }

  // Pass each customer to the ListItem component
  createCustomersList() {
    const customers = this.props.customers
    return customers.map((customer, index) => {
      return (
        <div key={customer.id}>
          <ListItem customer={customer} />
          {index !== customers.length - 1 && (
            <div className="list__items__separator" />
          )}
        </div>
      )
    })
  }

  componentDidMount() {
    this.fetchUsers()
  }

  render() {
    const { isFetching } = this.state
    return (
      <div className="list">
        <h1>Customers</h1>
        <div className="list__items">
          {isFetching ? (
            <div className="fetching">Fetching customers...</div>
          ) : (
            this.createCustomersList()
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  customers: state.customers,
})

const mapDispatchToProps = dispatch => ({
  setCustomers: customers => dispatch(setCustomers(customers)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
