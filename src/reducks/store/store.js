import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';

import {UsersReducer} from '../users/reducers'
import {RoomsReducer} from '../rooms/reducers'
import thunk from 'redux-thunk';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      rooms: RoomsReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}