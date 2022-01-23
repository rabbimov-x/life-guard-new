import React from "react";
import Navbar from "../Navbar/Navbar";

import "./header.scss"

const Header= ()=>{
    return(
        <div className = "header">
            <Navbar/>
            <div className = "container">
                <div className = "row">
                    <div className = "col-6 left-header">
                        <h1 className =  "black-text">Find And Sreach Your</h1>
                        <h1 className = "blue-text">Suitabe Doctor's</h1>
                        <p className = "grey-text">Lorem  amet consectetur adipisicing elit. Amet est distinctio delectus deserunt omnis ipsam soluta, natus placeat voluptate, nemo nesciunt, </p>
                        {/* <form  className  = "input-container d-flex">
                            <input type = "text" value = "Find yout doctor" className = "form-control input-dotor"></input>
                            <div className = "select-region">
                                <select type = "range" id = "input11" name = "region" className = " form-control sellect-region-in ">
                                <option  > New York , USA</option>
                                <option >Navoiy</option>
                                <option >Qashqadaryo</option>
                                <option >Surxondardo</option>
                                <option >shimkent</option>    
                                </select> 
                                

                            </div>
                            <button className = "btn btn-search"><img src="/assets/images/svg/search.svg"></img></button>
                        </form> */}
                    </div>

                    <div className = "col-6 right-header">

                        <div className = "right-raund">
                            <div className = "light-blue">
                                <div className = "little-blue">
                                    

                                    <div className = "phone" >
                                        <img src = "./assets/images/svg/phone-blue.svg" alt="error" />
                                    </div>
                                    <div className = "video">
                                        <img className = "imge"  src = "./assets/images/svg/discussion-video.svg" alt="error" />
                                    </div>
                                    <div className = "massege">
                                        <img className = "imge" src = "./assets/images/svg/masseges-header.svg" alt="error"/>
                                    </div>
                                    <div className = "white-round">
                                    </div>
                                    <div className  ="dotor-round ">
                                    <img className = "image-round" src = "assets/images/png/doktor-Anna.png" alt="error"/>
                                    </div>  
                                    <div className = "happy-potents">
                                        <img className = "imge" src = "assets/images/svg/heart-like.svg" alt="error"/>
                                        <h4 className  = "number-happy">2600+</h4>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header;