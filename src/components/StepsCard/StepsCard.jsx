import React from "react";
import "./stepsCard.scss"

const StepsCard = (props)=>{
    return(
        <div className = "StepsCard ">
            <div className = "card">
                <div className = "card-body">
                    <div className = "image">
                        <img src = {props.vlaue}  alt="error"/>
                    </div>
                    <div className = "logoName">
                        <p>Find best doctor's</p>
                    </div>
                    <div className = "izoh">
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium </p>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StepsCard;