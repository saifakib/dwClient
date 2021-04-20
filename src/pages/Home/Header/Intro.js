import React from 'react'
import DryWash from '../../../assets/image/dry wash.png'
import ShoppingCart1 from '../../../assets/logo/shopping-cart 1.png'

export default function Intro() {
    return (
        <>

            <div className="container">
                <div className=" mt-5">
                    <div className="row align-items-center flex-sm-row-reverse">
                        <div className="col-md-6 p-5">
                            <img src={DryWash}
                                className="d-block w-100" alt="..." />
                        </div>
                        <div className="col-md-6 p-5">
                            <h2 className="infinity">Dry Wash For Everyone</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eum consequuntur suscipit
                                reiciendis
                            optio recusandae eos dolore veritatis voluptates. Consequuntur.</p>
                            <button type="button" className="bnt"><img className="shopping-cart-img" src={ShoppingCart1} />Get An Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
