import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="header">
    <h2 className="header__title">React and Stripe</h2>
    <Link to="/add" className="button">
      Add customer
    </Link>
  </div>
)

export default Header
