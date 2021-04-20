import React from 'react'
//import { Switch, Route } from 'react-router-dom'
import Header from '../pages/Home/Header'
import Service from '../pages/Home/Service'
import About from '../pages/Home/About'
import Testimonial from '../pages/Home/Testimonial'
import Contact from '../pages/Home/Contact'
import Footer from '../pages/Home/Footer'


export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Service />
                <About />
                <Testimonial />
                <Contact />
                <Footer />
            </main>


        </>
    )
}
