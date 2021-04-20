import { useContext } from 'react'
import { UserContext } from '../app/App'
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ children, ...rest }) =>{
    
    const { user } = useContext(UserContext)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          (user.email || sessionStorage.getItem('token')) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;