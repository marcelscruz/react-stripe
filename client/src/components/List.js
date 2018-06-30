import React, { Component } from 'react'
import axios from 'axios'
import ListItem from './ListItem'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customers: [],
      isFetching: true,
    }
  }

  // Fetches the customers list
  fetchUsers() {
    axios.get('/customers').then(async res => {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        res.data.data.forEach(customer => {
          this.setState({ customers: [...this.state.customers, customer] })
        })
        this.setState({ isFetching: false })
      }
    })
  }

  // Passes each customer to the ListItem component
  createCustomersList() {
    return this.state.customers.map(customer => {
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

export default List
