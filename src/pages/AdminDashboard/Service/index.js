import React, { useState, useEffect } from 'react'
import axios from '../../../utils/axios'
import { Link } from 'react-router-dom'

export default function Index() {

    const [services, setServices] = useState([])

    useEffect(async () => {
        try{
            let result = await axios('admin/services')
            setServices(result.data.services)
        }catch(e) {
            console.log(e)
        }
    })

    return (
        <div class=" container-fluid px-4 px-lg-0">
            <div class="pb-5">
                <div class="container">
                    <div class="row">
                    <Link to="/admin/service/create" className="btn btn-primary px-4 py-2 mt-5">Create Service</Link>
                        <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="p-2 px-3 text-uppercase">Name</div>
                                            </th>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Price</div>
                                            </th>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Action</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {services.map(service => {
                                            <tr>
                                                <th scope="row" class="border-0">
                                                    <div class="p-2">
                                                        <div class="ml-3 d-inline-block align-middle">
                                                            <h5 class="mb-0">{service.name}</h5>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td class="border-0 align-middle"><strong>${service.price}</strong></td>
                                                <td>
                                                    <button className="btn btn-warning">
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-danger">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
