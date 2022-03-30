import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import { FcHome } from "react-icons/fc";
import Educations from './Educations';

function NavBar() {
    console.log("Nav BAr");
  return (
    <>
        {/* <nav className='navbar'>
            <div className='container'>
                <div className='nav-container'>
                    <Link to='/' className='brand-logo'>CV</Link>
                    <ul>
                        <li>
                            <Link to='/'>
                                <i className='fas fa-home'/>Home
                            </Link>
                            <Link to='/skills'>
                                <i className='fas fa-copy'/>Skills
                            </Link>
                            <Link to='/education'>
                                <i className='fas fa-graduation-cap'/>Education
                            </Link>
                            <Link to='/portofolios'>
                                <i className='fas fa-address-card'/>Portofolios
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}
        <nav className='navbar'>
                <div>
                    <Link to='/' className='brand-logo'>CV</Link>
                    <ul className='nav-container'>
                        <li>
                            <Link to='/' target="_self">Home</Link>
                            <Link to='/skills' target="_self">Skills</Link>
                            <Link to='/educations' target="_self">Education</Link>
                            <Link to='/portofolios' target="_self">Portofolios</Link>
                        </li>
                    </ul>
                </div>
        </nav>
        
    </>
  )
}
export default NavBar;