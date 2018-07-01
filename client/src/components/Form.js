import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: props.customer.metadata.first_name,
      lastName: props.customer.metadata.last_name,
      email: props.customer.email,
      description: props.customer.description,
      accountBalance: props.customer.account_balance,
    }
  }

  onFirstNameChange = e => {
    const firstName = e.target.value
    this.setState({ firstName })
  }

  onLastNameChange = e => {
    const lastName = e.target.value
    this.setState({ lastName })
  }

  onEmailChange = e => {
    const email = e.target.value
    this.setState({ email })
  }

  onDescriptionChange = e => {
    const description = e.target.value
    this.setState({ description })
  }

  onAccountBalanceChange = e => {
    const accountBalance = e.target.value
    this.setState({ accountBalance })
  }

  onSubmit = e => {
    e.preventDefault()

    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      description: this.state.description,
      accountBalance: this.state.accountBalance,
    })
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form__input"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.onFirstNameChange}
            autoFocus
            required
          />

          <input
            type="text"
            className="form__input"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.onLastNameChange}
            required
          />

          <input
            type="email"
            className="form__input"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onEmailChange}
            required
          />

          <input
            type="text"
            className="form__input"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            required
          />

          <input
            type="text"
            className="form__input"
            placeholder="Account balance"
            value={this.state.accountBalance}
            onChange={this.onAccountBalanceChange}
            required
          />
          <button className="button" onClick={this.onSubmit}>
            Save
          </button>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  customer: PropTypes.object,
}

Form.defaultProps = {
  customer: {
    metadata: {
      first_name: '',
      last_name: '',
    },
    email: '',
    description: '',
    account_balance: '',
  },
}

export default Form
