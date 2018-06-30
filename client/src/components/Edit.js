import React, { Component } from 'react'

class Edit extends Component {
  render() {
    return (
      <div>
        <h1>edit</h1>
        <h2>{this.props.match.params.id}</h2>
      </div>
    )
  }
}

export default Edit
