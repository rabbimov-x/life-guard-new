import React from "react"; 

import "./footer.scss"

const Footer =()=>{
    return(
        <div className ="Footer w-100">
            <div className = "container ">
                <div className = "row footer-row">
                    <div className = "col-3">
                        <ul className = " nav flex-column">
                            <li className = "nav-item w-100"><img src = "./assets/images/png/HEALTCARE.png" className = "nav-link logo-footer" /></li>
                            <li className = "nav-item"><a className = "nav-link text-secondary" href = "#"> USE , Newyourk, 3498 - house</a></li>
                            <li className = "nav-item"><a className = "nav-link text-secondary" href = "tel:993332529"> Content us: 993332529 </a>  </li>
                            <li className = "nav-item d-flex w-100 justify-content-between aligin-center pt-4">
                                <a className = " nav-icon" href = "#">
                                    <img className = "footer-icon " src="./assets/images/svg/facebook-f.svg"></img>
                                </a>
                                <a className = " nav-icon" href = "#">
                                    <img className = "footer-icon " src="./assets/images/svg/instagram.svg"></img>
                                </a>
                                <a className = " nav-icon" href = "#">
                                    <img className = "footer-icon " src="./assets/images/svg/twitter.svg"></img>
                                </a>
                                <a className = " nav-icon" href = "#">
                                    <img className = "footer-icon " src="./assets/images/svg/telegram.svg"></img>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className = "col-2"></div>
                    <div className = "col-2">
                        <ul className = "nav flex-column">
                            <li className = "nav-item"><a className = "nav-link footer-title  " href = "#">Category</a></li>
                            <li className = "nav-item"><a className = "nav-link text-secondary " href = "#">Home</a></li>
                            <li className = "nav-item"><a className = "nav-link text-secondary bold " href = "#">About</a></li>
                            <li className = "nav-item"><a className = "nav-link text-secondary bold " href = "#">Services</a></li>
                            <li className = "nav-item"><a className = "nav-link text-secondary bold " href = "#">Reviews</a></li>
                            <li className = "nav-item"><a className = "nav-link text-secondary bold " href = "#">Article</a></li>
                        </ul>
                    </div>
                    <div className = "col-2">
                        <ul className = "nav flex-column">
                            <li className = "nav-item"><a className = "nav-link footer-title" href = "#">About</a></li>
                            <li className = "nav-item"><a className = "nav-link text-secondary" href = "#">Partners</a></li>
                            <li className = "nav-item"><a className = "nav-link text-secondary" href = "#">Careers</a></li>
                            <li className = "nav-item"><a className = "nav-link text-secondary" href = "#">Press</a></li>
                            <li className = "nav-item"><a className = "nav-link text-secondary" href = "#">Community</a></li>
                        </ul>
                    </div>
                    <form action = "#" className = "col-3">
                        <ul className = "nav flex-column">
                            <li className = "nav-item"><a className = "nav-link footer-title">Subscribe newsletter</a></li>
                            <li className = "nav-item"><a className = "nav-link text-secondary">Sign up for tips, new destination</a></li>
                            <li className = "nav-item p-2 pl-3"><input className = "form-control " type = "email" placeholder = "Enter your email" /></li>
                            <li className = "nav-item p-2 pl-3"><button className = "btn btn-info w-100" type = "submit">Subcribe</button></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer;
