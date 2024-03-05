import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Checkout = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext)

    // console.log(service)
    const btnSubmit = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const date = form.date.value
        const price = form.price.value

        const order = {
            name,email,date,price
        }
        axios.post('http://localhost:3000/bookings',{order})
        .then(res=>{
            console.log(res.data)
        })
       
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                   
                    <div className="    shadow-2xl bg-base-100">
                        <form onSubmit={btnSubmit} className="card-body w-4xl  md:grid grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue={user?.email} name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">date</span>
                                </label>
                                <input type="date" placeholder="date" name='date' className=" input input-bordered" 
                                 />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Amount</span>
                                </label>
                                <input type="text" name='price' defaultValue={"$"+service.price}  placeholder="password" className="input input-bordered" required />
                                
                            </div>
                           
                        <div className="form-control mt-6 w-full flex justify-center">
                                <input className='btn btn-success border-t-indigo-400' type="submit" value="Book Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;