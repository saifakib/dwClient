import React, { useState, useEffect } from 'react'
import SeriveCard from '../../../component/Home/ServiceCard'
import panjaboLogo from '../../../assets/logo/panjabi.png'
import axios from '../../../utils/axios'

export default function Index() {
    const [services, setServices] = useState([])
    useEffect(async() => {
        try{
            let results = await axios.get('/');
            setServices(results.data.services)
        }catch(e){
            console.log(e)
        }
    }, [])
    return (
        <>
            <section className=" container mt-5">
                <h2 className="text-center">Our Awesome Services</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {services.map(service => 
                    <SeriveCard img={panjaboLogo} service={service}/>
                    )}                     
                 <div className="text-center mt-4">
                    <button className="btn btn-success text-center">Explore More</button>
                </div>
                </div>
        </section>  
        </>
    )
}
