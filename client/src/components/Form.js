import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: props.customer && props.customer.metadata.first_name,
      lastName: props.customer && props.customer.metadata.last_name,
      email: props.customer && props.customer.email,
      description: props.customer && props.customer.description,
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

  onSubmit = e => {
    e.preventDefault()

    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      description: this.state.description,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.onFirstNameChange}
            autoFocus
            required
          />

          <input
            type="text"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.onLastNameChange}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onEmailChange}
            required
          />

          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            required
          />
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
  },
}

export default Form
