import React, { useState, useEffect, createContext } from 'react'
import axios from '../utils/axios'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import AdminDashboard from './AdminDashboard'
import Service from '../pages/AdminDashboard/Service'
import CreateService from '../pages/AdminDashboard/Service/CreateService'
import Login from '../pages/Login'

import Payment from '../pages/CustomerDashboard/Payment'

import PrivateRoute from '../component/PrivateRoute'

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState({})

  const createUser = async ({ name, email }) => {
    let newUser = await axios.post('customer/createuser', {
      name: name,
      email: email
    })
    setUser(newUser.data)
    console.log(user)
  }
  return (
    <div>
      <UserContext.Provider value={{ user, setUser, createUser }}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/admin">
            <AdminDashboard />
          </PrivateRoute>
          <Route exact path="/admin/services">
            <Service />
          </Route>
          <PrivateRoute exact path="/admin/service/create">
            <CreateService />
          </PrivateRoute>
          <PrivateRoute exact path="/admin/service/delete">
            <Service />
          </PrivateRoute>

          <PrivateRoute exact path="/customer/payment">
            <Payment />
          </PrivateRoute>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
