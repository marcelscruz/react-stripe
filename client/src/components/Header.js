import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <h2>React and Stripe</h2>
    <Link to="/add">Add customer</Link>
  </div>
)

export default Header
