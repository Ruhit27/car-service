import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
           fetch ('http://localhost:3000/services')
           .then(res=>res.json())
           .then(data=>setServices(data))
    },[])
   
    return (
        <div className='mt-8'>
            <h2 className='font-bold text-3xl text-purple-500'>Our Services</h2>
            <p className='mt-4 font-semibold'>Experience excellence in car service, maintenance, and repair at <br />  CARSOME Service Center. Book your appointment now for expert car care!</p>
               <div className='mt-6 grid md:grid-cols-3 md:ml-20'>
                {
                    services.map(service=> <ServiceCard key={service._id} service={service} ></ServiceCard> )
                }

                
               </div>
        </div>
    );
};

export default Services;