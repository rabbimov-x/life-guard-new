import React from "react";
import "./ourCard.scss"

const OurCard =(props)=>{
    return(
        <div className = "OurCard  ">
           <div className = "card card-all">
                <div className = "card-body our-card-body">
                        <div className = "our-image">
                            <img src = "./assets/images/png/Xumoyun.jpg"  alt="error"/>
                        </div>
                        <div className = "our-title">
                            <h3>Cardiology</h3>
                        </div>
                        <div className = "our-information">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, consequuntur nulla. </p>
                        </div>
                    </div>
                    <div className = "card-footer our-card-footer">
                        <div className = "our-card-footer-in"></div>
                    </div>
           </div>
        </div>
    )
}

export default OurCard;