import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to='/login'>Login</Link>
    <Link to='/signup'>Signup</Link>
  </nav>
);

const profileButton = (currentUser) => (
  <nav className="profile-page-link">
    <Link to="/user/:id">
      Profile
    </Link>
  </nav>
)

const Navbar =  ({ currentUser }) => (
  currentUser ? profileButton(currentUser) : sessionLinks()
)

export default Navbar;
