import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './styles/index.scss'
import AppRouter from './routers/AppRouter'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
registerServiceWorker()
