import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import App from '../components/App'
import Edit from '../components/Edit'

const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
