
import { Link } from 'react-router-dom';
import ThemeController from '../../Utilities/ThemeController/ThemeController';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)
    const btnLogout =()=>{
        logOut()
    }
    const navItems = <>
    <li to='/' className='font-bold'> <Link> Home </Link> </li>
    <li> <Link to='/about'> About </Link> </li>
    {user?.email?<li> <Link to='/bookings'> Bookings </Link> </li>: <></> }
    
    </>
    return (
        <div className="navbar bg-base-100">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">CarDoc</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {navItems}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user?.email? <><Link onClick={btnLogout}  className="btn">Logout</Link >
                    
                    </>  :   <Link to='/login' className="btn">Login</Link >
                }

            
             
               
                <ThemeController></ThemeController>
            </div>
        </div>
    );
};

export default Navbar;