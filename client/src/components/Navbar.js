
import logo from "../images/Capture_d_Ã©cran_2022-08-24_Ã _10.08.12-removebg-preview.png";
// import {Link}  from  "react-router-dom" ;
// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import { Link } from "react-router-dom";



import "../CSS/Navbar.css"
const Navbar = () => {

    return (

        <nav>
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
                {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </label>
            <label class="logo"><img style={{ width: 150, paddingTop: 9 }} src={logo} alt="Logo du site" /></label>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">ZERTYUe</Link></li>
                <li><Link to="/">iilyrouid</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
                <li className="localisation checkbtn" id="check"><Link to="/">LOCALISATION</Link></li>
            </ul>
        </nav>




    );
}

export default Navbar;