import React from 'react'

export default function List() {
    return (
        <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="border-0 bg-light">
                        <div class="p-2 px-3 text-uppercase">Name</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                        <div class="py-2 text-uppercase">Email ID</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                        <div class="py-2 text-uppercase">Service</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                        <div class="py-2 text-uppercase">Pay With</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                        <div class="py-2 text-uppercase">Status</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" class="border-0">
                        <div class="p-2">
                            <div class="ml-3 d-inline-block align-middle">
                                <h5 class="mb-0">Yeasin</h5>
                            </div>
                        </div>
                    </th>
                    <td class="border-0 align-middle"><strong>Fahad@gamil.com</strong></td>
                    <td class="border-0 align-middle"><strong>Shirt Wash</strong></td>
                    <td class="border-0 align-middle"><strong>Credit Card</strong></td>
                    <td class="border-0 align-middle text-danger"><strong>Pending</strong></td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
