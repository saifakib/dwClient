import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../../app/App'
import HeadImg from '../../../assets/image/d.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const { user } = useContext(UserContext)
    return (

        <>
            <header className="container">
                <nav className="d-flex navbar navbar-expand-lg navbar-light">
                    <div className="me-auto p-2">
                        <a className="navbar-brand" href="#"><img className="imgg" src={HeadImg} alt="" /></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="p-2">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav li-color mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Our Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Our Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="btn btn-success nav-link">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
