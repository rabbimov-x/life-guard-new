import React, {Component} from "react";
import StepsCard from "../StepsCard/StepsCard";
import Slider from "react-slick";
import OurCard from "../OurCard/OurCard"
import CenterMode from "../AdminLAyout";
import BiografyCard from "../BiografyCard/BiografyCard"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./main.scss"
const Main = (props)=>{

    const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500 
      };

console.log(props)

    return(
        <div className = "Main-all">
            <div className = "container ">
                <div className = "row">
                    <div className = "col-8 step-title">
                        <p className ="m-0">
                            3 Easy Steps and Get Your Solution
                        </p>
                    </div>
                </div>
                <div className = "row">
                        
                    <div className = "col-4">
                        <StepsCard/>
                    </div>
                    
                    <div className = "col-4">
                        <StepsCard/>
                    </div>
                    <div className = "col-4">
                        <StepsCard/>
                    </div>
                </div>
                <div className = "row experience-doctor">
                <div className = "col-6">
                    <div className = "blue-round-experience">
                        <div className ="round-1-experience"></div>
                        <div className = "round-2-experience">
                        <div className = "image-experience">
                            <img src = "assets/images/png/doktor-Stiv.png" ></img>
                        </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className = "col-6 experience-form">
                    <div className = "rigth-title">
                        <h1 className = "m-0">
                        Best quality service with our experience
doctors
                        </h1>
                        
                    </div>
                    <div className = "right-text">
                    <p className = "m-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Inventore ea at magnam eius dolore excepturi placeat, 
                        officia est quas cum cupiditate rem fugit. Tenetur!
                    </p>
                    </div>
                    <from className = " form-all" action="/action_page.php" method="get">
                        <div className = "mb-3 form-check">
                            <input type = "checkbox" id = "form1" className = " form-check-input checbox-1" name = "con" ></input>
                             <label className = "form-label"  htmlFor="form1 "  >Lorem ipsum dolor sit amet consectetur </label>
                        </div>
                        <div className = "form-check mb-3">
                        <input type = "checkbox" id = "form2" className = " form-check-input checbox-1" ></input>
                        <label className = "form-label" htmlFor="form2">Consultion our top specialists</label>
                        </div>
                        <div className = "mb-3 form-check">
                        <input type = "checkbox" id = "form3" className = " form-check-input checbox-1" ></input>
                        <label className = "form-label" htmlFor="form3">Consultion our top specialists</label>
                        </div>

                        <button className = "btn  btn-info pd-4" type = "submit">explore specials</button>
                    </from>
                </div>
                
                </div>
                <div className = "row our-service">
                    <div className = "our-service-title w-100">
                        <h1 className = "m-0">Our Service</h1>
                    </div>
                    <div className = "w-100 our-service-text ">
                        <p className = "m-0 w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                         Numquam qui quaerat placeat explicabo ut sed. Delectus!</p>
                    </div>
                    <div className = "col-12 d-bolck ">
                    <div className = "w-100 text-center">
        <h2>Center Mode</h2>
        <Slider {...settings}>
        
          <div>
            <OurCard/>
          </div>
          <div>
            <OurCard/>
          </div>
          <div>
            <OurCard/>
          </div>
          <div>
            <OurCard/>
          </div>
          <div>
            <OurCard/>
          </div>
          <div>
            <OurCard/>
          </div>

        </Slider>
      </div>
                          {/* <Slider {...settings}>
                              <div>
                                <OurCard >1</OurCard>
                              </div>
                              <div>
                                <OurCard >1</OurCard>
                              </div>
                              <div>
                                <OurCard >1</OurCard>
                              </div>
                              <div>
                                <OurCard >1</OurCard>
                              </div>
                              <div>
                                <OurCard >1</OurCard>
                              </div>
                              <div>
                                <OurCard >1</OurCard>
                              </div>
                          </Slider> */}
                    </div>
                </div>
                <div className = "row biografy-row">

                    <div className = "our-service-title w-100">
                        <h1 className = "m-0">
                            Meet Our Certified Online Doctors
                        </h1>
                    </div>
                    <div className = "our-service-text w-100">
                        <p className = "w-50">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                             nemo earum repellendus et rerum rem, sed voluptatibus.
                        </p>
                    </div>
                    {
                        props.data.map((value , index)=>{
                            return(
                                <div className = "col-3" key = {index}>
                                    { index <= 3 ? <BiografyCard data = {value} /> : "" }
                                   
                                </div>
                            )
                        })
                    }
                    {/* <div className = "col-3">
                    <BiografyCard/>
                    </div>
                    <div className = "col-3">
                    <BiografyCard/>
                    </div>
                    <div className = "col-3">
                    <BiografyCard/>
                    </div>
                    <div className = "col-3">
                    <BiografyCard/>
                    </div> */}
                    <div className = "w-100 all-doctors-button">
                        <button className = "btn btn-info all-doctors-btn ">
                            Explore All Doctors
                        </button>
                    </div>
                    
                </div>
                <div className = "row mobile-row">
                    <div className = "col-6 mobile-img-content-left">
                        <div className = "mobile-img">
                            <img className ="mobile-img-in" src = "../assets/images/png/mobile-phone.png" />
                        </div>
                    </div>
                    <div className = "col-6 mobile-content-right">
                        <div className = "right-title">
                           <h1 className = "m-0" > Mobile apps are availble Get HealthCare for free ! </h1>
                        </div>
                        <div className = "right-text">
                            <p className = "m-0">Lorem ipsum dolor 
                             sit amet consectetur, adipisicing elit.
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nesciunt  Enim, libero, nisi recusandae voluptas quaerat impedit dolorem a</p>
                        </div>

                        <div className = "download-app">
                            <button className = "download-app-btn ">
                                <img className = "download-app-btn-img" src = "../assets/images/svg/GoogleStore.svg" />
                            </button>
                            <button className = "download-app-btn  ">
                                <img className = "download-app-btn-img" src = "../assets/images/svg/AppStore.svg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;