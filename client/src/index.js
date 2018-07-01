import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import './styles/index.scss'
import AppRouter from './routers/AppRouter'
// import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

// Send user to main page in every refresh
history.push('/')

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
// registerServiceWorker()
