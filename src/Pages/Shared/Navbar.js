import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <header className='sticky top-0 z-50'>
            <div className="navbar bg-primary">
                <div className="navbar-start relative">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
                            <li><Link to='/review'>Reviews</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            {
                                user && <li><Link to='/dashboard'>Dashboard</Link></li>
                            }
                            <li>{user ? <button onClick={logout} className="btn btn-ghost">SignOut</button> : <Link to='/login'>Login</Link>}</li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-white text-xl">Parts Carnival</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/' className='text-white'>Home</Link></li>
                        <li><Link to='/portfolio' className='text-white'>Portfolio</Link></li>
                        <li><Link to='/review' className='text-white'>Reviews</Link></li>
                        <li><Link to='/blogs' className='text-white'>Blogs</Link></li>
                        {
                            user && <li><Link className='text-white' to='/dashboard'>Dashboard</Link></li>
                        }
                        <li>{user ? <button onClick={logout} className="btn btn-ghost text-white">Signout</button> : <Link to='/login' className='text-white'>Login</Link>}</li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </header>
    );
};

export default Navbar;