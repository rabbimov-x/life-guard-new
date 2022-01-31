import React from "react";
import "./biografyCard.scss"


const BiografyCard = (props)=>{
    return(
        <div className = "BiografyCard">
            <div className = "card boi-card">
                <div className = "card-body boi-card-body">
                    <div className ="card-body boi-image">
                        <img src = "/assets/images/png/doktor-Anna.png" alt = "dw" />
                        
                    </div>
                    <div className = "boi-name">
                        <p className = "m-0" >{props.data.name}</p>
                    </div>
                    <div className = "bio-specialization">
                        <p className = "m-0" >{props.data.username}</p>
                    </div>
                    <div className = "bio-applications d-flex">
                        <div className = "applications-img bio-fb" >
                            <img src = "/assets/images/svg/facebook.svg"  alt = "Error"/>
                        </div>
                        <div className = "applications-img bio-tw">
                            <img src = "/assets/images/svg/twitter.svg" alt = "Error" />
                        </div>
                        <div className = "applications-img bio-vk">
                            <img src = "/assets/images/svg/vkontakte.svg" alt = "Error" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  BiografyCard;