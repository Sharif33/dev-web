import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div style={{marginBottom:"70px"}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-2 text-warning" to="/home"><span className="border-bottom border-info">Dev</span><span className="text-info border-top border-warning">Web</span></NavLink>
                    <div className="text-center">
                        <img className="img-fluid w-50 rounded-circle px-2" src={user?.photoURL} alt="" />
                        <br />
                        <small className="text-light">{user?.displayName}</small>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })} className="nav-link active mx-3 fs-5 " aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })} className="nav-link active mx-3 fs-5 " to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })} className="nav-link active mx-3 fs-5 " to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })} className="nav-link active mx-3 fs-5 " to="/contact">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                {user?.email ? <button onClick={logOut} className="btn btn-danger">Logout</button> : <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })} className="nav-link active mx-3 fs-5 " to="/login">Sign In</NavLink>}
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;