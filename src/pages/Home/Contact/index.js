import React from 'react'

export default function index() {
    return (
        <>


            <section className="mt-5 third">

                <div className=" container">
                    <div className=" mt-5">
                        <h2 className="text-center">Let Us Handle Your Project Professionally</h2>
                        <div className=" mt-5 p-5">
                            <form>
                                <div className="form-row">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="First name" />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <input type="text" className="form-control" placeholder="Your Massage" />
                                    </div>
                                </div>
                            </form>
                            <div className="text-center mt-4 mb-2">
                                <button className="btn btn-success text-center">Send Massage</button>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
