import React from 'react'
import {Route, Switch} from 'react-router'
import {Login, Home, SignUp, CreateRoom, Room, EnterRoom} from './templates'
import Auth from './Auth'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />

      <Auth>
        <Route exact path='(/)?' component={Home} />
        <Route exact path='/room/create' component={CreateRoom} />
        <Route exact path='/room/enter' component={EnterRoom} />
        <Route exact path='/room/:id' component={Room} />
      </Auth>
    </Switch>
  )
}

export default Router