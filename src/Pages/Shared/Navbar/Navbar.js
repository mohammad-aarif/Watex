import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './navbar.css'
const Navbar = () => {
  const {user, logOut} = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src="https://i.ibb.co/zVNFhds/watex-1.png" alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home">About</Link>
              </li>
            </ul>
            <div className="d-flex">
              {user.email ?<div className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="profile-img" src={user.photoURL} alt={user.displayName} />
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/dashboard">Manage Order</Link></li>
                  <li><Link className="dropdown-item" to="/">Payment</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button onClick={logOut} className="dropdown-item">Log Out</button></li>
                </ul>
              </div> :
              <Link to="/login" className="btn general-btn px-3">Login</Link>
              }
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;