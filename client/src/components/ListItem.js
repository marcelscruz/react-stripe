import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListItem extends Component {
  render() {
    console.log('listitem comp')
    return (
      <div>
        <h1>list item</h1>
      </div>
    )
  }
}

ListItem.propTypes = {
  customer: PropTypes.object.isRequired,
}

export default ListItem
