import React, { Component } from 'react'
import Header from './Header'
import List from './List'

class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    )
  }
}

export default App
