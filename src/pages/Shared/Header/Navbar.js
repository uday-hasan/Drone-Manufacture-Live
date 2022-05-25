import React from 'react';
import { Link } from 'react-router-dom';
import { GiElectric } from 'react-icons/gi'
import { BiLogIn } from 'react-icons/bi'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Navbar = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="navbar bg-accent text-white w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/parts'}>Parts</Link></li>
                        <li><Link to={'/home'}>Item 3</Link></li>
                        <li><Link to={'/home'}>Item 3</Link></li>
                        <li><Link to={'/home'}>Item 3</Link></li>
                    </ul>
                </div>
                <div className='hidden lg:block'>
                    <Link to={'/'} className="btn normal-case text-xl bg-primary text-white ">Electronics Manufacture <span><GiElectric /></span></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className=' hover:bg-primary transition-all duration-200'><Link to={'/home'}>Home</Link></li>
                    <li className=' hover:bg-primary transition-all duration-200'><Link to={'/parts'}>Parts</Link></li>
                    <li className=' hover:bg-primary transition-all duration-200'><Link to={'/home'}>Item 3</Link></li>
                    <li className=' hover:bg-primary transition-all duration-200'><Link to={'/home'}>Item 3</Link></li>
                    <li className=' hover:bg-primary transition-all duration-200'><Link to={'/home'}>Item 3</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button className='btn rounded-full bg-primary  font-bold text-white'>{user?.displayName}</button> : <Link to={'/register'} className="btn bg-primary text-white font-bold"><span>Login</span> <span className='text-2xl'> <BiLogIn /></span></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;