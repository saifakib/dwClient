import React from 'react'
import Payment from '../../pages/CustomerDashboard/Payment'

export default function ServiceCard({ img, service }) {
    return (
        <>
            <div className="col">
                <div className="card h-100 shadow border-0 bdradious text-center">
                    <div className="p-5">
                        <img src={img} className="card-img-top icon" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <div>
                            <h3><span className="dollar-color">${service.price}</span></h3>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum
                            voluptates quos explicabo, possimus qui!"</p>
                    </div>
                    <input type="button" className="btn btn-success text-center" onClick={() => <Payment service={service}/> } value="Payment"/>
                </div>
            </div>
        </>
    )
}
