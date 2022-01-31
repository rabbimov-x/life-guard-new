import React from "react"; 
import "./footer.scss"

const Footer =()=>{
    return(
        <div className ="Footer w-100">
            <div className = "container ">
                <div className = "row footer-row">
                    <div className = "col-3">
                        <ul className = " nav flex-column">
                            <li className = "nav-item"><span className = "nav-link text-secondary" > USE , Newyourk, 3498 - house</span></li>
                            <li className = "nav-item"><span className = "nav-link text-secondary" > <img src="./assets/images/png/HEALTCARE.png" className = "nav-link logo-footer" alt="error" /></span></li>
                            <li className = "nav-item"><a className = "nav-link text-secondary" href = "tel:993332529"> Content us: 993332529 </a>  </li>
                            <li className = "nav-item d-flex w-100 justify-content-between aligin-center pt-4">
                                <div className = " nav-icon"  >
                                    <img className = "footer-icon " src="./assets/images/svg/facebook-f.svg" alt="error"></img>
                                    <img className = "footer-icon " src="./assets/images/svg/facebook-f.svg" alt="error" ></img>
                            {/*  */}
                                </div>
                                <div className = " nav-icon" >
                                    <img className = "footer-icon " src="./assets/images/svg/instagram.svg" alt="error" ></img>
                                </div>
                                <div className = " nav-icon" >

                                    <img className = "footer-icon " src="./assets/images/svg/twitter.svg" alt="error"></img>
                                </div>
                                <div className = " nav-icon" >
                                    <img className = "footer-icon " src="./assets/images/svg/telegram.svg"  alt="error"/>
                                    <img className = "footer-icon " src="./assets/images/svg/twitter.svg"alt="error" ></img>
                                </div>
                                <div className = " nav-icon" >
                                    <img className = "footer-icon " src="./assets/images/svg/telegram.svg"alt="error"  />

                                </div>
                                <span className = " nav-icon" >
                                </span>
                            </li>
                            
                        </ul>
                    </div>
                    <div className = "col-2"></div>
                    <div className = "col-2">
                        <ul className = "nav flex-column">
                            <li className = "nav-item"><span className = "nav-link footer-title  " >Category</span></li>
                            <li className = "nav-item"><span className = "nav-link text-secondary " >Home</span></li>
                            <li className = "nav-item"><span className = "nav-link text-secondary bold " >About</span></li>
                  
                            <li className = "nav-item"><span className = "nav-link text-secondary bold " >Services</span></li>
                            <li className = "nav-item"><span className = "nav-link text-secondary bold " >Reviews</span></li>
                            <li className = "nav-item"><span className = "nav-link text-secondary bold " >Article</span></li>
                        </ul>
                    </div>
                    <div className = "col-2">
                        <ul className = "nav flex-column">
                            <li className = "nav-item"><span className = "nav-link footer-title" >About</span></li>
                            <li className = "nav-item"><span className = "nav-link text-secondary" >Partners</span></li>
                            <li className = "nav-item"><span className = "nav-link text-secondary" >Careers</span></li>
                            <li className = "nav-item"><span className = "nav-link text-secondary" >Press</span></li>
                            <li className = "nav-item"><span className = "nav-link text-secondary" >Community</span></li>
                        </ul>
                    </div>
                    <form action = "#" className = "col-3">
                        <ul className = "nav flex-column">
                            <li className = "nav-item"><span className = "nav-link text-secondary">Sign up for tips, new destination</span></li>
                            <li className = "nav-item"><span className = "nav-link footer-title">Subscribe newsletter</span></li>
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
