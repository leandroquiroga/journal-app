import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'

export const AuthRouter = () => {
  return (
    <section className='auth__main'>

      <article className='auth__container p-2'>

        <Switch>
          
          <Route
            exact
            path='/auth/login'
            component={Login}
          />

          <Route
            exact
            path='/auth/register'
            component={Register}
          />

          <Redirect to='/auth/login' />
        
        </Switch>

      </article>

    </section>
  )
}
