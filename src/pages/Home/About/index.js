import React from 'react'
import Dry from '../../../assets/image/dry (2).png'

export default function index() {
    return (
        <>
            <section className="mt-5 third">
                <div className=" container">
                    <div className=" mt-5">
                        <div className="row align-items-center flex-sm-row-reverse">
                            <div className="col-md-6 p-5">
                                <h2>Let Us Wash Your Cloth Professionally</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eum consequuntur suscipit
                                    reiciendis
                                optio recusandae eos dolore veritatis voluptates. Consequuntur.</p>
                                <div className="row align-items-center flex-sm-row-reverse">
                                    <div className="col-md-6">
                                        <h1>16+</h1>
                                        <h6>Happy Customer</h6>

                                    </div>
                                    <div className="col-md-6">
                                        <h1>500+</h1>
                                        <h6>Total Service</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6  p-5">
                                <img src={Dry} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
