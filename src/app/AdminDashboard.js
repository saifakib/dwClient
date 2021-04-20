import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../pages/AdminDashboard/Navbar'
import Service from '../pages/AdminDashboard/Service'

export default function AdminDashboard() {
    return (
        <>
            <Navbar />
            <Switch >
                {/* <Route path="/services">
                    <h1><Service /></h1>
                </Route> */}
                <Route exact path="/orders"></Route>
                <Route exact path="/reviews"></Route>
                <Route exact path="/contacts"></Route>
                <Route exact path="/payments"></Route>
                <Route exact path="/logout"></Route>
            </Switch>
        </>
    )
}
