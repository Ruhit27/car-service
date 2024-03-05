
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {
    const location = useLocation()
    // console.log(location)
    const navigate = useNavigate()
    const { login } = useContext(AuthContext);
    const btnSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        login(email, pass)
            .then(result => {
                const user = result.user;
                console.log(user)
                const userEmail = { email }

                axios.post('http://localhost:3000/jwt', userEmail, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) 
                        {
                            navigate(location?.state ? location?.state : '/')

                        }
                    })

            })
            .then(error => console.log(error))
    }
    return (
        <div className="hero min-h-[700px] bg-base-200">
            <div className="hero-content flex-col ">
                <p className='text-3xl font-semibold mb-10'>Login Here</p>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={btnSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className=''>Dont have an account?<Link className='font-semibold  text-blue-600' to='/signup'> SignUp </Link> </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;