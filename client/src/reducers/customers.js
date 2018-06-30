const customersReducerDefaultState = []

export default (state = customersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CUSTOMERS':
      return action.customers
    default:
      return state
  }
}
