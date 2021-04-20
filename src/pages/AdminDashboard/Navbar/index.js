import React from 'react'
import { NavLink } from 'react-router-dom'

export default function index() {
    return (
        <section id="ss">
            <header classNameName="">
                <nav className="d-flex navbar navbar-expand-lg navbar-light container">
                    <div className="p-2">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav li-color mx-auto">
                                <li className="nav-item">
                                    <NavLink to="/admin/services" className="nav-link">
                                        Services
                                    </NavLink>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Booking List.html">Orders</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="review.html">Reviews</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Order Lists.html">Contacts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Make Admin.html">Make Admin</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Manage Service.html">Payments</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Add Service.html">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </section>
    )
}
