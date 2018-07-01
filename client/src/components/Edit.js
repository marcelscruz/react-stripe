import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'

class Edit extends Component {
  render() {
    console.log('customer from props', this.props.customer)
    console.log('all', this.props.all)
    return (
      <div>
        <h1>edit</h1>
        <h2>{this.props.match.params.id}</h2>
        <Form />
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

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Edit)
