import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./navbar.scss"


const Navbar = ()=>{
   const history = useHistory();
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
{/* <<<<<<< HEAD */}
                        <img src = "/assets/images/svg/search2.svg" alt="error"/>
{/* ======= */}
                        <img src = "/assets/images/svg/search2.svg" alt="error" />
{/* >>>>>>> bc4e4f0ccb5a95348bc649ea5b581e2e36c3ffe8 */}
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
                        <button  onClick={()=>{history.goBack();}} className = "btn">Go Back</button>
                     </li>
                   </ul>
                </div>
                  
              </div>
        </div>
    )
}

export default Navbar;