import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ render: Component, redirectPath, condition, children, ...rest }) => {
  return (
    <Route {...rest} render={(props) =>
      condition
        ? (Component && <Component {...props} />) || children
        : (
          <Redirect
            to={{
              pathname: redirectPath,
              state: { from: props.location }
            }}
          />
        )
    }
    />)
}

export default PrivateRoute