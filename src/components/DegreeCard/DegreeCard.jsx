import React from "react";
import "./degreeCard.scss"

const DegreeCard =(props)=>{
    return(
        <div className = "DegreeCard">
            <div className = "card degree-card">
                <div className = "degree-icon"><p className = "m-0">"</p></div>
                <div className = "card-body degree-card-body ">
                    <div className = "degree-image">
                        <img className = "w-100" src = {props} />
                    </div>
                    <div className = "d-flex degree-name-all">
                        <div className = "degree-name">
                            <h3 className = "m-0">Lana Zara dilan</h3>
                        </div>
                        <div className = "degree-stars d-flex ">
                            <img src = {props.value}></img>
                            <img src = {props.value}></img>
                            <img src = {props.value}></img>
                            <img src = {props.value}></img>
                            <img src = {props.value}></img>
                        </div>
                    </div>
                    <div className = "degree-city">
                        <p className = "m-0">New York,America,USA</p>
                    </div>
                    <div className = 'degree-title'>
                        <p className = "m-0"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non quas quam, quisquam ad, velit dicta impedit soluta, molestias natus qui incidunt. Atque deserunt tempora ipsa explicabo numquam reiciendis voluptatum!</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default DegreeCard;