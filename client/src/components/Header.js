import React, { Component } from 'react'

class Header extends Component {
  handleAddCustomer() {
    console.log('handleAddCustomer')
  }

  render() {
    return (
      <div>
        <h2>React and Stripe</h2>
        <button onClick={this.handleAddCustomer}>Add customer</button>
      </div>
    )
  }
}

export default Header
