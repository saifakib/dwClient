import React from 'react'
import People from '../../assets/logo/man.webp'

export default function Testimonial({ name, designation, description }) {
    return (
        <>
            <div className="col">
                <div className="card h-100 shadow border-0 bdradious text-center">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="p-5">
                                <img src={People} className="card-img-top icon" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1>{name}</h1>
                            <h6>{designation}</h6>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
