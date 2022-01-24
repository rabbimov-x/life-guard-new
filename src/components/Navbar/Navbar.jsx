import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss"


const Navbar = ()=>{
    return(
        <div className = "container">
              <div className = "row ">
                <div className = "col-6 left-nav ">
                  <div>
                    <img src = "/assets/images/png/HEALTCARE.png" className = "nav-logo"  alt="error" />
                  </div>
                  <div className="input-navbar">
                     <input className=" form-control input-nav " placeholder="Search ..."  alt="error"/>
                     <div className="input-search-img">
                        <img src = "/assets/images/svg/search2.svg" alt="error" />
                     </div>
                  </div>
                </div>
                <div className = "col-6 right-nav" >
                   <ul className = "nav">
                     <li className = "nav-item" >
                        <Link to = "/" className = "nav-link">Home</Link>
                     </li>
                     <li className = "nav-item" >
                        <Link to = "/about" className = "nav-link">About</Link>
                     </li>
                     <li className = "nav-item" >
                        <Link to = "/doctors" className = "nav-link">Doctors</Link>
                     </li>
                     {/* <li className = "nav-item" >
                        <Link to = "/services" className = "nav-link">Sevices</Link>
                     </li> */}
                     <li className = "nav-item" >
                        <button  to = "/started" className = "btn">Get Started</button>
                     </li>
                   </ul>
                </div>
                  
              </div>
        </div>
    )
}

export default Navbar;