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
    axios.get('/customers').then(async res => {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        console.log(res.data.data)
        this.props.setCustomers(res.data.data)
        this.setState({ isFetching: false })
      }
    })
  }

  // Pass each customer to the ListItem component
  createCustomersList() {
    return this.props.customers.map(customer => {
      return <ListItem key={customer.id} customer={customer} />
    })
  }

  componentDidMount() {
    this.fetchUsers()
  }

  render() {
    const { isFetching } = this.state
    return (
      <div>
        <h1>list</h1>
        {isFetching ? 'Fetching users' : this.createCustomersList()}
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
