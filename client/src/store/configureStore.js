import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import customersReducer from '../reducers/customers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      customers: customersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  )
  return store
}
