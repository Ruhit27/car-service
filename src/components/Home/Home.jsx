import React from 'react';
import img from '../../../assets/images/banner/4.jpg'
import Services from '../services/Services';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div className="hero min-h-[600px]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5 font-semibold">Experience excellence </p>
                        <Link  className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;