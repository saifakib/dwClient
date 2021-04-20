import React from 'react'
import Testimonial from '../../../component/Home/Testimonial'


//fake data
const testimonials = [
    {
        name: "Sabbir Hasan",
        designation: "CEO, SoftFarm",
        description: "A Nice Dry Wash Company"
    },
    {
        name: "Abid Khan",
        designation: "Manager, Apple inc",
        description: "Nice Behavior"
    },
    {
        name: "Saif Hasan",
        designation: "Developer, DreamIt",
        description: "Nice Washer"
    },
]

export default function index() {
    return (
        <>

            <section className=" container mt-5">
                <h2 className="text-center">Testimonial</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {testimonials.map(test => <Testimonial key={test.name} name={test.name} designation={test.designation} description={test.description} />)}
                </div>
            </section>
        </>
    )
}
