import React from "react";
import { connect } from "react-redux";
import "./biografyCard.scss"


const BiografyCard = (props)=>{
    console.log(props.data )
    console.log("Biografycard")
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
                        <a className = "applications-img bio-fb" >
                            <img src = "/assets/images/svg/facebook.svg"  alt = "dnjhds"/>
                        </a>
                        <div className = "applications-img bio-tw">
                            <img src = "/assets/images/svg/twitter.svg" />
                        </div>
                        <div className = "applications-img bio-vk">
                            <img src = "/assets/images/svg/vkontakte.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  BiografyCard;