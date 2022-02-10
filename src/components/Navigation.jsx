import React, {Fragment} from 'react';
import {Link } from 'react-router-dom';

function Navigation(props) {
    const isLoggedIn = localStorage.getItem('USER_ID');
    const userName = localStorage.getItem('NAME');
    return (
        <div className='navigation'>
            <nav className='navigation navbar navbar-expand-lg navbar-light'>
                <div className='container'>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
                    <a className='navbar-brand' href='#'>Adopt A Paw</a>
                    <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                        <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
                        </li>
                        <li className='nav-item'>
                        <Link className='nav-link' to='/dogs'>Dogs</Link>
                        </li>
                        <li className='nav-item'>
                        <Link className='nav-link' to='/new-dog'>Add Dogs</Link>
                        </li>
                    </ul>
                    </div>
                    {/* <div className='login'>
                        <Link to='/signin'>Log In</Link>
                    </div>
                    <div className='signup'>
                        <Link to='/signup'>Sign Up</Link>
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default Navigation