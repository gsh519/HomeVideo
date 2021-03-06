import * as Actions from './actions'
import initialState from '../store/initialState'

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        ...action.payload
      }
      case Actions.LOGOUT:
      return {
        ...action.payload
      }
    default:
      return state
  }
}