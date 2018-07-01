import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ListItem = props => {
  const { account_balance, description, email, id, metadata } = props.customer

  const { first_name, last_name } = metadata

  return (
    <Link to={`/edit/${id}`}>
      <div className="list-item">
        <h2>{first_name + ' ' + last_name}</h2>
        <h3>{description}</h3>
        <h3>{email}</h3>
        <h3>€{account_balance}</h3>
      </div>
    </Link>
  )
}

ListItem.propTypes = {
  customer: PropTypes.object.isRequired,
}

export default ListItem
